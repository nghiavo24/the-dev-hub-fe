import React from 'react'
import linkedin from '../media/linkedin.png';
import morgan from '../media/morgan.jpg';
import jeffrey  from '../media/jeffrey.jpeg'
import nathan from '../media/nathan.png'


const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="font-lora mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p className="font-montaga italic text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Group of aspiring engineers want to make a practical & useful web application to facilitate the job searching process after the bootcamp.</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={morgan} alt="Morgan"/>
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div className='font-lora'>Morgan Arancibia</div>
                  </h3>
                  <span className="font-montaga text-gray-500 dark:text-gray-400">Full-stack Software Engineer</span>
                  <p className="font-montserrat mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Morgan drives the design and builds many core functionalities of this application.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://github.com/mobrewer" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/morgan-arancibia/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <img src={linkedin} alt='linkedin' className='w-5 h-5'/>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={jeffrey} alt="Jeffrey"/>
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div className='font-lora'>Jeffrey Koshy</div>
                  </h3>
                  <span className="font-montaga text-gray-500 dark:text-gray-400">Full-stack Software Engineer</span>
                  <p className="font-montserrat mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jeffrey collaborates with other developer to design and build many of essential components of this application.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://github.com/koshy123" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/jeffrey-koshy/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <img src={linkedin} alt='linkedin' className='w-5 h-5'/>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={nathan} alt="Nathan"/>
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div className='font-lora'>Nathan Vo</div>
                  </h3>
                  <span className="font-montaga text-gray-500 dark:text-gray-400">Full-stack Software Engineer</span>
                  <p className="font-montserrat mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Nathan supports and collaborates with other developers on many aspects of this application.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://github.com/nghiavo24" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/nghia-vo/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <img src={linkedin} alt='linkedin' className='w-5 h-5'/>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
      </div>  
  </div>
</section>
  )
}

export default About