# Description
This package offers the date field which only contains Turkish language. Used flatpickr for Laravel Nova.

# Installation
Using Composer:

```
composer require aozen/nova-turkish-datetimepicker
```

# Usage
Top of the resource file include TurkishDateTime:

```
use Aozen\TurkishDatetimepicker\TurkishDateTime;
```


Use with TurkishDateTime:

```
TurkishDateTime::make('Created At')
```

# Sample

![alt text](https://raw.githubusercontent.com/aozen/turkish-date/master/img/Date.png)