export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseover:h1": this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log("Hi there");
  }

  onHeaderHover(): void {
    console.log("H1 was hovered over");
  }

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
