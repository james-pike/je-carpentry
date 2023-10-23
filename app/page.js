'use client'
import '/app/globals.css'
import NavbarCTA from '@/app/navbar'
import FooterX from '@/app/footer'
import React from 'react';
import { Button} from 'flowbite-react';


function Home() {

  const buttonStyle = {
    margin: '0 10px', // Add margin to create spacing between buttons
    padding: '0px',
    borderRadius: '0', // Set border-radius to 0 for square corners
    fontSize: '1.5rem', // 
  };

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

      {/*}
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

    */}

    return (
      <main>
      <NavbarCTA/>
      <main className="z-10 lg:relative">
  <div className="relative w-full h-80 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
    <img
      className="absolute inset-0 object-cover w-full h-full"
      src="/je.jpg"
      alt=""
    />
  </div>
  <div className="w-full pt-12 pb-16 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
    <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span className="block xl:inline">Input your custom tagline here.</span>{' '}
        
      </h1>
      <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
      This optional subtitle block can be used for additional information about JE Carpentry services. 
      </p>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
        <Button style={buttonStyle} href='/contact' className='px-2 bg-blue-600 '>Get a Free Quote Today!</Button>
        </div>
     
      </div>
    </div>
  </div>
</main>









<div className='bg-white'>
<ul role="list" className="grid grid-cols-2 py-8 ml-5 mr-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
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
</div>


<FooterX/>
      </main>

    )

}

export default Home