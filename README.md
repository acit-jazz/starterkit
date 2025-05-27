# Starter kit for Laravel Inertia Vue js 3


## Requirement 
```bash
    "laravel/framework": "^12.0"
    "php": "^8.2",
    "predis/predis": "^3.0",
```

```bash
   npm install @fortawesome/fontawesome-free
   npm install @he-tree/vue
   npm install @vueup/vue-quill
   npm install quill-image-uploader
   npm install vue3-dropzone
   npm install toastify-js
```
## Installation

You can install the package via composer:


```bash
laravel new demoproject
```
```bash
composer require acitjazz/starterkit
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="starterkit-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="starterkit-config"
```

This is the contents of the published config file:

```php
return [
];
```

Optionally, you can publish Assets,Seeders,Models,Controllers,Repositories,Requests,Resources

```bash
php artisan vendor:publish --tag=starterkit-assets
php artisan vendor:publish --tag=starterkit-seeders
php artisan vendor:publish --tag=starterkit-models
php artisan vendor:publish --tag=starterkit-controllers
php artisan vendor:publish --tag=starterkit-repositories
php artisan vendor:publish --tag=starterkit-requests
php artisan vendor:publish --tag=starterkit-resources

```

## Usage

```php
$starterkit = new AcitJazz\Starterkit();
echo $starterkit->echoPhrase('Hello, AcitJazz!');
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Acit Jazz](https://github.com/Acit-Jazz)
- [Acit Jazz](https://github.com/AcitJazz)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
