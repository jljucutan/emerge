## Synopsis

Web application that helps manage and create eForms.

## Motivation

Get rid of repetitive task of replacing html fields with merge fields on small and even large forms.

## Installation

Close the project from this repository

```
    git clone https://github.com/jljucutan/emerge.git
```

```
    php composer.phar install --prefer-dist
```

```
    php -dmemory_limit=-1 app/console doctrine:database:create
```

```
    php -dmemory_limit=-1 app/console doctrine:schema:create
```

Enjoy!

## License

This project is licensed under MIT.
