<?php

namespace AcitJazz\Starterkit\QueryFilters;

use Closure;

class Limit extends Filter
{
   protected function applyFilter($builder)
   {
      return $builder->limit((int)request($this->filterName()));

   }
}
