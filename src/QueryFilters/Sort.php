<?php

namespace AcitJazz\Starterkit\QueryFilters;

use Closure;

class Sort extends Filter
{
   protected function applyFilter($builder)
   {
      return $builder->orderBy(request('order') ?? 'name', request($this->filterName()));
   }
}
