# NgxAge

Ngx-Age is an Angular Pipe that transforms a Date or string date into an age.


## Usage

```ts
import AgePipe from 'ngx-age';

// omitting other code
imports: [
  AgePipe,
]
```

Given a `birthDate` variable with the date of 1/1/2000 in the template:

```html
<span>{{ birthDate | age}}</span> <!-- <span>24</span> -->
``` 
You may also pass a string date into the pipe:

```html
<span>{{ '6/21/1999 | age }}</span>
```

The pipe will render the current age in the DOM.

## Error Handling

Future dates and invalid string dates will return a zero.

## Unit Testing

AgePipe has been tested for both Date object inputs and string date value inputs. Tests also included invalid dates and future dates.

## Additional Features

No new features are planned at this time. However, should you have an idea for a valid use-case for an additional feature, please provide a detailed description of the requirements as an issue. I make no guarantees of additional feature development, but consideration will be given for good ideas with a solid use-case.
