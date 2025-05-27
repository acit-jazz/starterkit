<?php

namespace AcitJazz\Starterkit\Commands;

use Illuminate\Console\Command;

class StarterkitCommand extends Command
{
    public $signature = 'starterkit';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
