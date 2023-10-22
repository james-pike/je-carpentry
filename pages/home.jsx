'use client'
import '/app/globals.css'
import NavbarCTA from '@/app/navbar'
import FooterX from '@/app/footer'
import { useEffect } from 'react';


function Home() {

    const files = [
        {
          title: 'Kitchens',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'Flooring',
            size: '3.9 MB',
            source:
              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
          },
          {
            title: 'Trim & Finishing',
            size: '3.9 MB',
            source:
              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
          },
          {
            title: 'Interior Siding',
            size: '3.9 MB',
            source:
              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
          },
        // More files...
      ]

    useEffect(() => {
        // Add the Crisp script dynamically to the document
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.innerHTML = `
          window.$crisp = [];
          window.CRISP_WEBSITE_ID = "283b7c7f-4f69-4725-ba15-f11822e24856";
          (function () {
            var d = document;
            var s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `;
        document.head.appendChild(s);
    
        // Clean up the script when the component unmounts (optional)
        return () => {
          document.head.removeChild(s);
        };
      }, []);

      


    return (
      <main>
      <NavbarCTA/>
      <section class="relative min-h-screen flex items-center">
    <div class="absolute inset-0 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
    <div class="relative py-8 px-4 mx-auto max-w-screen-xl text-white z-1 bg-primary-transparent">
        <div class="mb-6 max-w-screen-lg lg:mb-0 text-center">
            <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-7xl">We invest in the world’s potential</h1>
            <p class="mb-6 font-light text-gray-400 lg:mb-8 md:text-xl lg:text-2xl">The need for energy is universal. That's why Flowbite scientists and engineers are pioneering new research and pursuing new technologies to reduce emissions while creating more efficient fuels. We're committed to responsibly meeting the world's energy needs.</p>
            <a href="#next-section" class="inline-flex items-c``enter py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Get a Free Quote Today
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>




 {/*}     <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-16 z-10 relative">
       
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        
    </div>
    <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
</section>

    */}



<ul role="list" className="grid grid-cols-2 ml-5 mr-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
  {files.map((file) => (
    <li key={file.source} className="relative">
      <div className="relative block w-full h-0" style={{ paddingBottom: '100%' }}>
        <img
          src={file.source}
          alt=""
          className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-gray-700 bg-opacity-70">
          <p className="text-lg font-medium text-white truncate">{file.title}</p>
        </div>
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {file.title}</span>
        </button>
      </div>
    </li>
  ))}
</ul>


<FooterX/>
      </main>

    )

}

export default Home