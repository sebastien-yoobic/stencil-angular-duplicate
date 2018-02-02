## Duplication of the stencil component duplication inside an angular element 


#### StencilAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Stencil component code

```
import { Component, Prop } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.scss"
})
export class MyButton {
  @Prop() name: string;

  render() {
    return (
      <div>
        <p>I am the button: {this.name}</p>
      </div>
    );
  }
}
```
