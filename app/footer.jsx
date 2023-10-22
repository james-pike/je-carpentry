import React from 'react';

const FooterX = () => {
  return (
<footer class="p-4 bg-gray-100 md:p-8 lg:p-10">
  <div class="mx-auto max-w-screen-xl text-center">
  
     
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Services</a>
          </li>
     
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
         
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 JE Carpenty. All Rights Reserved.</span>
  </div>
</footer>

  );
};

export default FooterX;