
<script>
import VueSelect from '@/Snippets/vueselect.mjs';
import {  defineComponent } from "vue";
export default defineComponent({
  components: {
    VueSelect
  },
  props: {
    classname: String,
    options: {
      type: [Array, Object],
      default() {
        return []
      },
    },
    placeholder: {
      type: String,
      default: 'Select Option'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'label'
    },
    store: {
      type: [String, Object],
    },
    disable: {
      type: Boolean,
      default:false
    },
    is_string: {
      type: Boolean,
      default:false
    },
    modelValue: [String, Object,Number],
  },
  emits: ['update:modelValue', 'change'],  // Declare emitted events here
  data() {
    return {
      selectedOption: null,
      otherText: null,
    }
  },
  watch:{
    modelValue(data){
        switch (data) {
            case null:
                this.selectedOption = null;
                break;

            case undefined:
                break;
            default:
                break;
        }
    },
    otherText(data){
          this.$emit('update:modelValue', data);
          this.$emit('change', data);  // Optional: remove if unnecessary
    }
  },
  created() {
    if (this.modelValue !== null) {
      if (typeof this.modelValue === 'object' || typeof this.modelValue === 'string' || typeof this.modelValue === 'number') {
        this.selectedOption = this.getDatafilter(this.modelValue);
        this.$emit('update:modelValue', this.modelValue);
      }
    }
  },
  methods: {
    changeSelect(option) {
        if (this.multiple) {
          this.$emit('update:modelValue', option);
          this.$emit('change', option);  // Optional: remove if unnecessary
        } else {
            if(option){
            let optionSelect = this.getOptionlabel(option);
            this.$emit('update:modelValue', optionSelect);
            this.$emit('change', optionSelect);  // Optional: remove if unnecessary
            }else{
                this.$emit('update:modelValue', option);
                this.$emit('change', option);  // Optional: remove if unnecessary
            }
        }
    },
    getOptionlabel(option) {
      if (typeof option === 'object' && this.store !== undefined) {
        if (!option.hasOwnProperty(this.store)) {
            console.warn(
                `[anngmruf-select warn]: Store key "option.${this.store}" does not` +
                ` exist in options object ${JSON.stringify(option)}.\n` +
                `check your property data.`
            )
        }
        return option[this.store]
      }
      return option
    },

    getDatafilter(option) {
      let temp = option[this.store] ?? option;
      if(this.multiple){
        const data = this.options.filter((el) => {
            return temp.some((f) => {
              return f[this.store !== undefined ? this.store : this.label] === el[this.store !== undefined ? this.store : this.label];
            });
        });
       return data;
      }

      if(this.is_string){
        let data = this.options.find(item => {
           return  item[this.store] == temp
        } );
        return data;
      }
      let data = this.options.find(item => item[this.store !== undefined ? this.store : this.label] == temp[this.store !== undefined ? this.store : this.label] );
      console.log(data);
      if(data){
        return data[this.label];
      }
    },
  }
});

</script>

<template>
  <VueSelect :multiple="multiple" :class="classname" v-model="selectedOption" :options="options" @update:modelValue="changeSelect" :label="label" :placeholder="placeholder" :disabled="disable"/>
    <div v-if="selectedOption && selectedOption.value == 'others' && is_string">
    <TextInput
        type="text"
        class="mt-1 block w-full"
        v-model="otherText"
    />
    </div>
</template>

<style   lang="scss">
:root{--vs-colors--lightest: rgba(60, 60, 60, .26);--vs-colors--light: rgba(60, 60, 60, .5);--vs-colors--dark: #333;--vs-colors--darkest: rgba(0, 0, 0, .15);--vs-search-input-color: inherit;--vs-search-input-placeholder-color: inherit;--vs-font-size: 1rem;--vs-line-height: 1.4;--vs-state-disabled-bg: rgb(248, 248, 248);--vs-state-disabled-color: var(--vs-colors--light);--vs-state-disabled-controls-color: var(--vs-colors--light);--vs-state-disabled-cursor: not-allowed;--vs-border-color: var(--vs-colors--lightest);--vs-border-width: 1px;--vs-border-style: solid;--vs-border-radius: 4px;--vs-actions-padding: 4px 6px 0 3px;--vs-controls-color: var(--vs-colors--light);--vs-controls-size: 1;--vs-controls--deselect-text-shadow: 0 1px 0 #fff;--vs-selected-bg: #f0f0f0;--vs-selected-color: var(--vs-colors--dark);--vs-selected-border-color: var(--vs-border-color);--vs-selected-border-style: var(--vs-border-style);--vs-selected-border-width: var(--vs-border-width);--vs-dropdown-bg: #fff;--vs-dropdown-color: inherit;--vs-dropdown-z-index: 1000;--vs-dropdown-min-width: 160px;--vs-dropdown-max-height: 350px;--vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);--vs-dropdown-option-bg: #000;--vs-dropdown-option-color: var(--vs-dropdown-color);--vs-dropdown-option-padding: 3px 20px;--vs-dropdown-option--active-bg: #5897fb;--vs-dropdown-option--active-color: #fff;--vs-dropdown-option--deselect-bg: #fb5858;--vs-dropdown-option--deselect-color: #fff;--vs-transition-timing-function: cubic-bezier(1, -.115, .975, .855);--vs-transition-duration: .15s}.v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}:root{--vs-transition-timing-function: cubic-bezier(1, .5, .8, 1);--vs-transition-duration: .15s}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes vSelectSpinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity var(--vs-transition-duration) var(--vs-transition-timing-function)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}:root{--vs-disabled-bg: var(--vs-state-disabled-bg);--vs-disabled-color: var(--vs-state-disabled-color);--vs-disabled-cursor: var(--vs-state-disabled-cursor)}.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__clear,.vs--disabled .vs__search,.vs--disabled .vs__selected,.vs--disabled .vs__open-indicator{cursor:var(--vs-disabled-cursor);background-color:var(--vs-disabled-bg)}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:var(--vs-border-radius);white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:var(--vs-actions-padding)}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:var(--vs-controls-color);transform:scale(var(--vs-controls-size));transition:transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition-timing-function:var(--vs-transition-timing-function)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(var(--vs-controls-size))}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:var(--vs-controls-color);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;box-sizing:border-box;position:absolute;top:calc(100% - var(--vs-border-width));left:0;z-index:var(--vs-dropdown-z-index);padding:5px 0;margin:0;width:100%;max-height:var(--vs-dropdown-max-height);min-width:var(--vs-dropdown-min-width);overflow-y:auto;box-shadow:var(--vs-dropdown-box-shadow);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-top-style:none;border-radius:0 0 var(--vs-border-radius) var(--vs-border-radius);text-align:left;list-style:none;background:var(--vs-dropdown-bg);color:var(--vs-dropdown-color)}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:var(--vs-dropdown-option-padding);clear:both;color:var(--vs-dropdown-option-color);white-space:nowrap;cursor:pointer}.vs__dropdown-option--highlight{background:var(--vs-dropdown-option--active-bg);color:var(--vs-dropdown-option--active-color)}.vs__dropdown-option--deselect{background:var(--vs-dropdown-option--deselect-bg);color:var(--vs-dropdown-option--deselect-color)}.vs__dropdown-option--disabled{background:var(--vs-state-disabled-bg);color:var(--vs-state-disabled-color);cursor:var(--vs-state-disabled-cursor)}.vs__selected{display:flex;align-items:center;background-color:var(--vs-selected-bg);border:var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);border-radius:var(--vs-border-radius);color:var(--vs-selected-color);line-height:var(--vs-line-height);margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:var(--vs-controls-color);text-shadow:var(--vs-controls--deselect-text-shadow)}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected,.vs--single.vs--loading .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration,.vs__search::-ms-clear{display:none}.vs__search,.vs__search:focus{color:var(--vs-search-input-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:var(--vs-line-height);font-size:var(--vs-font-size);border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1;z-index:1}.vs__search::-moz-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search::placeholder{color:var(--vs-search-input-placeholder-color)}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid rgba(100,100,100,.1);border-right:.9em solid rgba(100,100,100,.1);border-bottom:.9em solid rgba(100,100,100,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0) scale(var(--vs-controls--spinner-size, var(--vs-controls-size)));-webkit-animation:vSelectSpinner 1.1s infinite linear;animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em;transform:scale(var(--vs-controls--spinner-size, var(--vs-controls-size)))}.vs--loading .vs__spinner{opacity:1}

.vs__dropdown-toggle{
    padding:5px 5px 8px 5px !important;
    border-radius: 0.375rem !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important
}
</style>
