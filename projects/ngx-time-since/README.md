# Ngx-Time-Since

Ngx-Time-Since is an npm package that contains a single Angular Pipe. `time-since` pipe transforms a Date or String date value into a string value expressing the amount of time that has passed since the date.

## Usage

Import the `TimeSincePipe` into your component.
```ts
import { TimeSincePipe } from 'ngx-time-since';

// code omiited for brevity...
imports: [
  TimeSincePipe,
]

```

Add the pipe to your template variables:

```html
<span>{{ someDistantDate | timeSince }}</span>

```

```html
<span>{{ "Wed, 21 Jul 2022 05:00:09 GMT" | timeSince }}</span>

```
Since the output is a string, you can chain additional string pipes to format the text in accordance with your wishes.

```html
<span>{{ someDate | timeSince | titlecase }}</span>
```
This would transform the output from `8 months ago` to `8 Months Ago`.

## Output

| Difference | Message |
|--|--|
| < 1 minute | a few moments ago |
| 1 to 2 minutes | 1 minute ago |
| 2 to 59 minutes | X minutes ago |
| 1 to 2 hours | 1 hour ago |
| 2 to 23 hours | X hours ago |
| 1 to 2 days | 1 day ago |
| 2 to 6 days | X days ago |
| 1 to 2 weeks | 1 week ago |
| 2 to 4 weeks | X weeks ago |
| 1 to 2 months | 1 month ago |
| 2 to 12 months | X months ago |
| 1 to 2 years ago | 1 year ago |
| >= 2 years ago | X years ago |


## Testing

Each outcome has been tested via a unit test.
