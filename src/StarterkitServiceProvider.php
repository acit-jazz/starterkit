<?php

namespace AcitJazz\Starterkit;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use AcitJazz\Starterkit\Commands\StarterkitCommand;

class StarterkitServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('starterkit')
            ->hasRoutes('backend')
            ->hasConfigFile()
            ->hasViews()
            ->hasMigrations([
                'create_admins_table',
                'create_admin_passwords_table',
                'create_medias_table',
                'create_pages_table',
                'create_permission_tables',
            ])
            ->hasCommand(StarterkitCommand::class);
    }

    public function packageBooted()
    {
        // Publish JS, CSS, and Blade Views to the main app
        $this->publishes([
            __DIR__ . '/../resources/js/' => resource_path('js/'),
            __DIR__ . '/../resources/css/' => resource_path('css/'),
            __DIR__ . '/../resources/views/' => resource_path('views/'),
        ], 'starterkit-assets');

        $this->publishes([
            __DIR__ . '/../database/migrations/' => base_path('database/migrations/'),
        ], 'starterkit-migrations');

        $this->publishes([
            __DIR__ . '/../database/seeders/' => base_path('database/seeders/'),
        ], 'starterkit-seeders');

        $this->publishes([
            __DIR__ . '/../routes' => base_path('routes'),
        ], 'starterkit-routes');

        $this->publishes([
            __DIR__ . '/Models' => app_path('Models'),
        ], 'starterkit-models');

        $this->publishes([
            __DIR__ . '/Helpers' => app_path('Helpers'),
        ], 'starterkit-helpers');

        $this->publishes([
            __DIR__ . '/Http/Controllers' => app_path('Http/Controllers'),
        ], 'starterkit-controllers');

        $this->publishes([
            __DIR__ . '/Http/Repositories' => app_path('Http/Repositories'),
        ], 'starterkit-repositories');

        $this->publishes([
            __DIR__ . '/Http/Requests' => app_path('Http/Requests'),
        ], 'starterkit-requests');

        $this->publishes([
            __DIR__ . '/Http/Resources' => app_path('Http/Resources'),
        ], 'starterkit-resources');

        $this->publishes([
            __DIR__ . '/Http/Middleware' => app_path('Http/Middleware'),
        ], 'starterkit-middleware');

    }
}
