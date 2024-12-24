class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white pb-5 pt-14 text-center text-black shadow-inner dark:bg-blue-900">
        <div class="container mx-auto flex flex-col items-center">
          <p class="mb-6 flex max-w-5xl justify-center rounded-2xl border-2 border-black px-3 text-center dark:text-white dark:border-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 text-black dark:text-white dark:filter-white">
              <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a class="font-sans dark:text-white" href="mailto:carlos@gomezpereanez.com">carlos@gomezpereanez.com</a>
          </p>
          <div class="mb-4 flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/carlos-a-gomez-p/" target="_blank" class="text-black hover:text-gray-700 dark:text-white">
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5v5.5h-3v-10h3v1.5c.44-.66 1.56-1.5 3-1.5 2.21 0 4 1.79 4 4v6z"/>
              </svg>
            </a>
            <a href="https://github.com/gomec1" target="_blank" class="text-black hover:text-gray-700 dark:text-white">
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.47 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.22.69.82.58 4.77-1.59 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
          <p class="mt-10 font-sans text-sm dark:text-white">&copy; 2024 All Rights Reserved</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
