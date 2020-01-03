<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->

        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" rel="stylesheet">

    </head>
    <body>

        <div id="app">
            <app></app>
        </div>

        <script src="{{ asset('js/admin.js') }}"></script>
    </body>
</html>
