const template = document.createElement('template');
template.innerHTML = `
    <style>
    @import "/assets/vue-app.css";
    </style>
`;

const script = document.createElement('script');
        script.type = 'module';
        script.src = '/assets/vue-app.js';
        script.async = true;
        script.defer = true;
class VueWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const div = document.createElement('div');
        div.id = 'vue-app-inside-web-component';
        this.shadowRoot.appendChild(div);

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.appendChild(script);
    }
}

// Web Component 등록
customElements.define('vue-web-component', VueWebComponent);

const vueWebComponent = document.createElement('vue-web-component');

document.body.appendChild(vueWebComponent);
