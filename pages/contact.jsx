'use client'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import '/app/globals.css'
import NavbarCTA from '@/app/navbar'
import FooterX from '@/app/footer'


function Contact() {
 
 
 {/* } useEffect(() => {
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



<div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 md:-mb-40">
        <div className="relative w-full h-full px-6 pt-20 pb-14 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 w-full overflow-hidden bg-gray-100 -z-10 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <div className='pt-5 lg:hidden'></div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:-mt-20">Get a Free Quote</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="w-6 text-gray-400 h-7" aria-hidden="true" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="w-6 text-gray-400 h-7" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="w-6 text-gray-400 h-7" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="marker:px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6 ">
          
          <form action="/api/submitForm" method="POST" class="grid grid-cols-1 gap-8 p-6 mx-auto max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
              <div>
            
             <div className='mt-4 md:hidden'></div>
                  <label for="first-name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                  <input type="text" id="first-name" name="firstName" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="First Name" required/>
              </div>
              <div>
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                  <input type="text" id="last-name" name="lastName" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Last Name" required/>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
              </div>
              <div>
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                  <input type="number" id="phone-number" name="phoneNumber" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required/>
              </div>
              <div class="sm:col-span-2">
                  <label for="message"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tell me about your project...</label>
                  <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  <p class="mt-4 text-sm text-gray-500">Upon form submission, we will review your project requirements and provide a free quote. </p>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get Quote</button>
            <hr></hr>
          </form>
          
      </div>
      </div>

<FooterX/>
      </main>

    )

}

export default Contact