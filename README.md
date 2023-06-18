# Perfume online marketplace frontend

Perfume online marketplace built using [Django](https://www.djangoproject.com/) and [Angular](https://angular.io/). The database is local made using
[PostgreSQL](https://www.postgresql.org/). It features a list of perfumes that can be viewed, the users being able to write comments about them. It features authentication, authorization, shopping cart, checkout.

Hosted at https://redikus3q.github.io/perfumes.github.io using [Github Pages](https://pages.github.com/).

# Front-end

Made using [Angular CLI 13.0.2](https://www.npmjs.com/package/@angular/cli/v/13.0.2) with [Angular Material](https://material.angular.io/) and some help from
[Animate.css](https://animate.style/).

## Prerequisites

Download and install [Node.js](https://nodejs.org/en/download/).

Download and install [Angular](https://angular.io/guide/setup-local). Using the following command will do:

```bash
npm install -g @angular/cli
```

## Installation

[Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or [download](https://www.itprotoday.com/development-techniques-and-management/how-do-i-download-files-github) the application.

Run the following command using the command prompt in the main directory of the front-end part, in our case /frontend.

```bash
npm install
```

## Usage

Use the following command in the main directory of the front-end part, in our case /frontend. The website will be available to use at [localhost:4200](http://localhost:4200/).

```bash
ng serve
```

If you want to deploy the front-end on your own on Github Pages you can simply run the build bat file and will be automatically be set up for you. You might need to change the name of the href to your github repo name in the bat.

```bash
build.bat
```

# Back-end

Please go to https://github.com/redikus3q/perfume-backend to pull and check out the back-end.
