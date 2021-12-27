interface Props {
    className?: string;
}
const ContactsLogo = ({ className = 'logo' }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 174 22"
            className={className}
            aria-labelledby="logo__title"
        >
            <g>
                <path d="M16.378 3.5H4.622A1.601 1.601 0 003 5.08v13.926a1.601 1.601 0 001.58 1.622h11.798A1.601 1.601 0 0018 19.048V5.121A1.667 1.667 0 0016.378 3.5zm-4.262 5.067h.008a1.277 1.277 0 011.319 1.236v.082a1.434 1.434 0 01-1.317 1.418 1.45 1.45 0 01-1.421-1.418 1.365 1.365 0 011.411-1.318zm-5.87 11.047H4.624a.642.642 0 01-.508-.608h.002V5.122a.478.478 0 01.51-.508h1.619l-.001 15zm8.816-4.355a.324.324 0 01-.304.305h-5.37a.324.324 0 01-.305-.305v-.508a2.534 2.534 0 012.432-2.432h1.115a2.466 2.466 0 012.432 2.432v.508z" />
                <path d="M96.348 4.629c-1.2 0-2.296.308-3.277.927-.988.623-1.76 1.545-2.326 2.748-.568 1.197-.846 2.626-.846 4.278 0 1.651.263 3.085.8 4.293l.002.005c.55 1.19 1.317 2.112 2.302 2.748l.005.003c.997.62 2.128.927 3.383.927.966 0 1.832-.163 2.593-.498.746-.328 1.368-.743 1.858-1.249l.182-.188-1.35-1.724-.235.171a8.391 8.391 0 01-1.452.872c-.427.194-.934.296-1.531.296-1.142 0-2.043-.438-2.73-1.324-.686-.898-1.055-2.323-1.055-4.332 0-2.069.37-3.504 1.052-4.37.702-.874 1.611-1.306 2.754-1.306.924 0 1.813.334 2.67 1.03l.228.183 1.507-1.767-.237-.194c-.65-.531-1.302-.923-1.955-1.166-.646-.246-1.43-.363-2.342-.363zm-5.332 3.804l-.27-.129-.001.002.271.127zm7.568-3.16l.107-.28-.001-.001h-.001l-.105.28zM93.49 17.097l.237-.184.001.001-.238.183zm.234-8.887v.001l-.234-.187.235.185v.001zM30.041 4.887H25.85V20.3h2.642v-5.44h1.571c1.779 0 3.239-.404 4.351-1.242 1.14-.859 1.69-2.163 1.69-3.852 0-1.59-.53-2.828-1.623-3.657-1.075-.828-2.568-1.222-4.44-1.222zm-1.549 7.761v-5.57h1.528c1.126 0 1.94.23 2.483.647l.003.002c.53.398.826 1.059.826 2.06 0 1.146-.304 1.853-.822 2.23l-.003.002c-.543.405-1.372.629-2.53.629h-1.485z" />
                <path d="M61.039 8.37V5.537l-2.578.308V8.37h-1.978v2.126h1.978v6.537c0 1.095.278 1.982.878 2.615l.005.005c.614.614 1.45.905 2.47.905 1.004 0 1.91-.275 2.708-.827l.226-.157-1.035-1.804-.257.138c-.533.287-.985.416-1.363.416-.433 0-.68-.113-.817-.272-.14-.197-.237-.546-.237-1.105v-6.451h2.433l.3-2.126h-2.733zM129.145 8.37V5.537l-2.578.308V8.37h-1.978v2.126h1.978v6.537c0 1.095.278 1.982.878 2.615l.006.005c.614.614 1.45.905 2.469.905 1.004 0 1.91-.275 2.708-.827l.227-.157-1.035-1.804-.257.138c-.533.287-.985.416-1.363.416-.434 0-.68-.113-.818-.272-.14-.197-.237-.546-.237-1.105v-6.451h2.433l.3-2.126h-2.733zM158.876 8.37V5.537l-2.578.308V8.37h-1.978v2.126h1.978v6.537c0 1.095.278 1.982.878 2.614l.005.006c.614.614 1.451.905 2.47.905 1.004 0 1.91-.275 2.707-.827l.227-.157-1.035-1.804-.257.138c-.533.287-.985.416-1.363.416-.433 0-.68-.113-.817-.272-.141-.197-.237-.546-.237-1.105v-6.451h2.433l.299-2.126h-2.732zM43.136 8.112c-.756 0-1.427.238-1.998.714a3.837 3.837 0 00-.83.991l-.121-1.447h-2.274V20.3h2.578v-6.738c.238-1.053.559-1.791.94-2.25.37-.444.85-.665 1.469-.665.288 0 .593.039.916.12l.308.077.477-2.526-.274-.069a4.9 4.9 0 00-1.19-.137z" />
                <path d="M50.333 8.112c-1.109 0-2.078.262-2.894.8-.813.522-1.43 1.265-1.852 2.215-.422.934-.628 2.01-.628 3.218 0 1.869.457 3.385 1.403 4.515.955 1.139 2.285 1.698 3.95 1.698 1.094 0 2.055-.255 2.87-.778l.004-.003c.81-.535 1.427-1.276 1.85-2.212v-.002c.422-.947.628-2.03.628-3.239 0-1.868-.456-3.384-1.402-4.513-.94-1.14-2.264-1.7-3.929-1.7zm-2.645 6.233c0-1.423.243-2.437.684-3.088.428-.63 1.065-.954 1.961-.954.881 0 1.507.32 1.928.947.435.648.675 1.658.675 3.074 0 1.424-.242 2.438-.68 3.09-.425.63-1.056.953-1.944.953-.89 0-1.52-.322-1.945-.948-.438-.648-.68-1.657-.68-3.074zM70.657 8.112c-1.108 0-2.078.262-2.894.8-.812.522-1.429 1.265-1.852 2.215-.421.934-.628 2.01-.628 3.218 0 1.869.457 3.385 1.403 4.515.955 1.139 2.285 1.698 3.95 1.698 1.094 0 2.056-.255 2.87-.778l.004-.003c.81-.535 1.427-1.276 1.85-2.212v-.002c.422-.947.628-2.03.628-3.239 0-1.868-.456-3.383-1.402-4.513-.94-1.14-2.264-1.7-3.929-1.7zm-2.73 1.052l-.162-.252h-.002l-.002.002.166.25zm6.428.838l.232-.19V9.81l-.002-.001-.23.192zm-6.343 4.343c0-1.423.243-2.437.684-3.088.428-.63 1.065-.954 1.961-.954.881 0 1.507.32 1.928.947.435.648.675 1.658.675 3.074 0 1.424-.241 2.438-.68 3.09-.424.63-1.056.953-1.944.953-.89 0-1.52-.322-1.945-.948-.438-.648-.68-1.657-.68-3.074z" />
                <path d="M83.858 8.112c-.767 0-1.478.184-2.127.555l-.002.002a4.679 4.679 0 00-1.11.904l-.124-1.203h-2.269V20.3h2.578v-8.254c.374-.587.765-1.027 1.17-1.33a2.28 2.28 0 011.411-.457c.531 0 .884.148 1.111.397.224.245.374.715.374 1.496V20.3h2.578v-8.427c0-1.13-.31-2.057-.964-2.743-.642-.69-1.532-1.018-2.626-1.018z" />
                <path d="M107.132 8.112c-1.109 0-2.078.262-2.894.8-.813.522-1.429 1.265-1.852 2.215-.422.934-.628 2.01-.628 3.218 0 1.869.456 3.385 1.403 4.515.955 1.139 2.285 1.698 3.949 1.698 1.095 0 2.056-.255 2.871-.778l.004-.003c.81-.535 1.426-1.276 1.849-2.212l.001-.002c.421-.947.628-2.03.628-3.239 0-1.868-.456-3.383-1.402-4.513-.941-1.14-2.265-1.7-3.929-1.7zm3.698 1.89l.23-.192h.001v.002l-.231.19zm-6.344 4.343c0-1.423.243-2.437.685-3.088.428-.63 1.064-.954 1.961-.954.881 0 1.507.32 1.928.947.435.648.674 1.658.674 3.074 0 1.424-.241 2.438-.679 3.09-.425.63-1.056.953-1.945.953s-1.52-.322-1.944-.948c-.438-.648-.68-1.657-.68-3.074z" />
                <path d="M119.903 8.112c-.767 0-1.478.184-2.127.555l-.003.002a4.69 4.69 0 00-1.11.904l-.123-1.203h-2.269V20.3h2.578v-8.254c.374-.587.765-1.027 1.17-1.33a2.28 2.28 0 011.411-.457c.531 0 .883.148 1.111.397.223.245.373.715.373 1.496V20.3h2.578v-8.427c0-1.13-.31-2.057-.963-2.742-.642-.69-1.532-1.02-2.626-1.02z" />
                <path d="M138.377 8.112c-1.247 0-2.587.267-4.017.792l-.275.101.686 2 .282-.094c1.188-.396 2.171-.587 2.958-.587.768 0 1.277.166 1.585.44.295.262.48.732.48 1.496v.539h-1.441c-1.627 0-2.931.329-3.876 1.026l-.002.001c-.946.71-1.41 1.728-1.41 3.014 0 1.087.347 1.992 1.058 2.686.713.698 1.677 1.032 2.854 1.032 1.38 0 2.489-.464 3.295-1.398.176.35.408.636.701.847.41.296.936.473 1.557.549l.245.03.619-1.887-.273-.099c-.272-.099-.453-.232-.567-.386-.107-.157-.182-.428-.182-.858v-5.182c0-1.258-.345-2.27-1.078-2.987-.736-.735-1.822-1.075-3.199-1.075zm-2.323 8.62c0-.7.231-1.181.663-1.5.449-.332 1.158-.522 2.176-.522h1.183v2.223c-.599 1.055-1.385 1.541-2.366 1.541-.593 0-.99-.157-1.245-.423-.257-.269-.411-.69-.411-1.319z" />
                <path d="M149.685 8.112c-1.07 0-2.011.264-2.812.803l-.003.002c-.781.536-1.381 1.284-1.803 2.232-.421.949-.627 2.046-.627 3.283 0 1.866.448 3.37 1.382 4.472l.002.002c.953 1.107 2.252 1.652 3.861 1.652 1.347 0 2.566-.44 3.649-1.313l.219-.176-1.231-1.758-.243.16c-.445.291-.84.501-1.186.635a3.425 3.425 0 01-1.122.175c-.849 0-1.471-.3-1.909-.889-.446-.612-.694-1.595-.694-3.003 0-1.406.247-2.416.699-3.075.458-.648 1.081-.969 1.904-.969.427 0 .805.067 1.139.196l.013.004c.353.118.721.31 1.103.583l.237.17 1.295-1.708-.22-.183a5.285 5.285 0 00-1.706-.978 5.742 5.742 0 00-1.947-.317zM167.742 8.112c-.809 0-1.552.142-2.225.432-.66.277-1.192.681-1.586 1.216l-.001.002a2.942 2.942 0 00-.573 1.767c0 .889.291 1.641.883 2.233l.003.003c.598.582 1.53 1.022 2.755 1.343.739.2 1.284.387 1.646.561l.008.004c.357.159.572.335.687.513l.005.006c.112.164.183.406.183.755 0 .43-.172.762-.539 1.023-.363.254-.882.397-1.59.397-1.093 0-2.09-.342-3.001-1.035l-.222-.17-1.436 1.641.226.197c1.195 1.044 2.694 1.558 4.476 1.558 1.295 0 2.41-.306 3.329-.933.962-.648 1.443-1.597 1.443-2.807 0-1.02-.344-1.852-1.049-2.462-.667-.589-1.657-1.034-2.939-1.354-.909-.242-1.499-.481-1.81-.704-.262-.197-.394-.463-.394-.834 0-.361.139-.627.43-.828l.006-.004c.304-.223.743-.351 1.349-.351.485 0 .939.074 1.365.22l.002.001c.445.148.918.38 1.417.7l.247.157 1.159-1.724-.223-.171a6.57 6.57 0 00-1.847-1.013c-.653-.228-1.383-.34-2.184-.34z" />
            </g>
            <title id="logo__title">ProtonContacts</title>
        </svg>
    );
};

export default ContactsLogo;