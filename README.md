## Synopsis

Web application that helps manage and create eForms.

## Motivation

Get rid of repetitive task of replacing html fields with merge fields on small and even large forms.

## Installation

Clone the project from this repository

```
    git clone https://github.com/jljucutan/emerge.git
```


```
    composer install --prefer-dist 
```

	*You must have composer install in your system or refer to https://getcomposer.org/download

```
    php -dmemory_limit=-1 app/console doctrine:database:create
```

```
    php -dmemory_limit=-1 app/console doctrine:schema:create
```

Enjoy!

## License

This project is licensed under MIT.
