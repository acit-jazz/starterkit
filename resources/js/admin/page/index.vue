<script setup>
import { ref } from "vue";
import {useBuildQuery} from '@/Composables/useBuildQuery.js'
import {router } from '@inertiajs/vue3';
const props  = defineProps({
    pages: Object,
    title:String,
    request:Object,
    is_admin:Boolean,
    trash:Boolean,
});
const params = ref({ ...props.request,
    search_title : '',
})
const filter = () => {
    const endpoint = ref(useBuildQuery(route('page.index'),params.value));
    router.get(endpoint.value);
}
const sortBy = (field) => {
  params.value.sort = params.value.sort === 'desc' ? 'asc' : 'desc';
  params.value.sort_by = field;
  filter();
}
</script>
<template>
    <Head :title="title" />
    <AppLayout>
       <div class="flex flex-wrap mt-4">
         <div class="w-full mb-12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                <div class="rounded-t mb-0 px-3 py-4 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full max-w-full flex">
                            <div class="flex items-center">
                                <h3 class="font-bold text-lg">
                                    {{title}} 
                                </h3>
                                <div class="flex items-center ml-10 max-w-[300px] relative">
                                    <TextInput type="text" class="mt-1 !py-1 block w-full" v-model="params.search_title" @change="filter"  placeholder="Search by title..." />
                                    <i class="fa fa-search absolute right-2 text-gray-400 top-3"></i>
                                </div>
                            </div>
                            <div class="fixed bottom-3 right-3 lg:bottom-0 lg:right-0 lg:relative ml-auto flex flex-col gap-3 lg:block">
                                <SecondaryLink  :href="route('page.create')" class="size-10 lg:size-auto  lg:px-3 lg:py-2 flex items-center justify-center gap-2 !rounded-full lg:!rounded-none lg:!rounded-l-md">
                                <i class="fa fa-pencil"></i>
                                <span class="hidden lg:block">Create New</span>
                                </SecondaryLink>
                                <SecondaryLink  :href="route('page.index', { trash:'1' })" class="size-10 lg:size-auto  lg:px-3 lg:py-2 flex items-center justify-center gap-2 !rounded-full lg:!rounded-none lg:!rounded-r-md bg-red-500">
                                <i class="fa fa-trash-can"></i>
                                <span class="hidden lg:block">Trash</span>
                                </SecondaryLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block w-full overflow-x-auto">
                <table class="items-center w-full bg-transparent border-collapse">
                    <thead>
                    <tr class="hidden lg:table-row">
                        <Th>Title 
                            <button class="ml-2 hover:text-primary"  @click="sortBy('title')">
                            <i class="fa fa-sort"></i>
                            </button>
                        </Th>
                        <Th>Template
                            <button class="ml-2 hover:text-primary"  @click="sortBy('template')">
                            <i class="fa fa-sort"></i>
                            </button>
                        </Th>
                        <Th>Published Date
                            <button class="ml-2 hover:text-primary"  @click="sortBy('published_at')">
                            <i class="fa fa-sort"></i>
                            </button>
                        </Th>
                        <Th></Th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(page,index) in pages.data" :key="index" class=" cursor-pointer relative py-3 block lg:py-0 lg:table-row border-t lg:border-0">
                        <Td>
                            <strong class="block lg:hidden">Title</strong>
                            <span>{{page.title}}</span>
                        </Td>
                        <Td>
                            <strong class="block lg:hidden">Template</strong>
                            <Badge class="bg-blue-200 !text-xs !py-1 !px-2" :class="{'bg-amber-300' : page.status == 'Draft'}">{{page.template}}</Badge>
                        </Td>
                        <Td>
                            <strong class="block lg:hidden">Published Date</strong>
                            <span>{{page.published_at ?? '-'}}</span>
                        </Td>
                        <Td >
                            <div v-if="trash">
                                <SecondaryLink  class="px-3 py-2 bg-green-500 rounded-none rounded-l-md" :href="route('page.restore', { page:page })" method="post" as="button">
                                    <i class="fas fa-rotate-right"></i>
                                </SecondaryLink>
                                <SecondaryLink  class="px-3 py-2 bg-red-500 rounded-none rounded-r-md" :href="route('page.destroy', { page:page })" method="post" as="button">
                                    <i class="fas fa-trash-can"></i>
                                </SecondaryLink>
                            </div>
                            <div v-else>
                                <SecondaryLink  class="px-3 py-2 bg-indigo-500 rounded-none rounded-l-md" :href="route('page.edit', { page:page })">
                                    <i class="fas fa-pencil"></i>
                                </SecondaryLink>
                                <SecondaryLink  class="px-3 py-2 bg-red-500 rounded-none rounded-r-md" :href="route('page.delete', { page:page })" method="post" as="button">
                                    <i class="fas fa-trash-can"></i>
                                </SecondaryLink>
                            </div>
                        </Td>
                    </tr>
                    </tbody>
                </table>
                 <pagination class="mt-6" :links="pages.meta.links" />
                </div>
            </div>
         </div>
       </div>
   </AppLayout>
</template>
