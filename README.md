
<h1 align="center">👨🏻‍💻 Portfolio 2</h1>

<h3 align="center">
  https://vidarshan.dev/
</h3>

<h4 align="center">
Version 2 of my portfolio website with all of my developer related activities and information.
</h4>


<div align="center">
<img src="https://therealsujitk-vercel-badge.vercel.app/?app=vercel.com/vidarshanadithya/" />
</div>

<br/>

<div align="center">
<img width='710' height='450' src="https://user-images.githubusercontent.com/48169745/154645417-f10a76f4-2787-4b90-9a53-ad3ff1206f72.png" />
</div>


## 🎛️ Tech Stack
- Typescript
- Next JS
- Mantine
- Vercel

## 👷‍♂️ Setup Project

- Step 1 - Clone repository
    
- Step 2 : Install packages with `npm`

       npm install
       
- Step 3 : Create a file named `env.local` in the root level. Add the following `env` variables, and replace with your values.


       STACKOVERFLOW_USER=<your-stackoverflow-user-id>
       STACKOVERFLOW_API_KEY=<your-stackoverflow-api-key>
       GITHUB_USERNAME=<your-github-username>
       GITHUB_PAT=<your-github-personal-access-token>
       NEXT_PUBLIC_EMAILJS_SERVICE=<your-emailjs-service-key>
       NEXT_PUBLIC_EMAILJS_TEMPLATE=<your-emailjs-template-key>
       NEXT_PUBLIC_EMAILJS_USER=<your-emailjs-user-id>
       
       
- Step 4 : Run command
  
        npm run dev
        
## 🔄 Reuse
- Free to reuse with proper references to this repo or my Github profile. Consider starring this repo atleast.
        
## 💿 Content
- Replace content in the `data/projects.ts` and `data/technicalcompetencies.ts` files with your own content. Put the images related to this content in the `public/images` folder.
        
## 🗒️ Note
- The stackoverflow keys and the github keys are needed for the integrated stackoverflow/github stats section on the footer of the website. If these keys cannot be provided consider commenting out the `<Footer/>` and the related API calls in the `pages/index.tsx` to avoid errors.

## 💬 Inquiries
- Email me to vidarshanadithya3@gmail.com to contact me directly.

## 🔗 References
- [Get Github Personal Access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Get Stackoverflow API keys](https://api.stackexchange.com/)
- [Get EmailJS credentials](https://www.emailjs.com/docs/tutorial/overview/)
