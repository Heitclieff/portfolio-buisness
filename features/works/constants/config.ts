export const comboboxData = {
     categories : [
          { value: "react", label: "React" },
          { value: "reactnative", label: "React Native" },
          { value: "next.js", label: "Next.js" },
          { value: "swiftui", label: "SwiftUI" },
          { value: "nodejs", label: "Node.js" },
          { value: "electron", label: "Electron" },
     ]
}


export const workData = [
{
     slug: "nobelist",
     filter : ["react" , "reactnative"],
     cover : "/works/nobelist_01.png",
     thumbnail : "https://www.youtube.com/embed/mhxi_EGQ_Pw?si=yPNl0EGuW-m8o4di",
     source : "https://github.com/Heitclieff/Novelist",
     title : "Nobelist",
     description : "A collaborative storytelling platform that empowers writers to co-create novels in real-time. This application bridges the gap between readers and creators through an interactive community-driven experience.",
     projectDetail : {
          platform : "Mobile Application",
          supports : "Android, iOS",
          stack : "React Native" , 
          collaborator : "Theethat Mana, Patcharapol Tariya"
     },
     features : [
          {  
               title : "Collaborative Writing", 
               description : "Enable multiple authors to contribute to the same story, creating diverse and multi-perspective narratives."
          } , 
          {  
               title : "Seamless Reading Experience",
               description : "Optimized reader interface designed for long-form content with customizable typography and dark mode support."
          } ,
          {  
               title : "Community Leaderboard",
               description : "A dynamic ranking system to highlight trending stories and top-performing creators based on engagement metrics."
          } ,
          {  
               title : "User Ecosystem",
               description : "Comprehensive profile management with social features including follow systems and real-time activity feeds."
          } ,
          {  
               title :"Personal Library",
               description : "Manage your collection with intuitive bookmarking and purchase history tracking."
          } ,
     ]
},
{
     slug: "sneaky",
     filter : ["react" , "next.js" , "website"],
     cover : "/works/sneaky_01.png",
     thumbnail : "",
     image : [],
     title : "Sneaky",
     source : "",
     description : "A high-performance e-commerce concept for premium footwear. Focused on providing a seamless shopping journey with a clean, modern aesthetic and intuitive product discovery.",
     projectDetail : {
          platform : "Web Application",
          supports : "Universal (Responsive Web)",
          stack : "React, Next.js, TailwindCSS" , 
          collaborator : "-"
     },
     features : [
          {  
               title : "Dynamic Cart Management", 
               description : "Fluid shopping experience with real-time cart updates and persistent storage for guest users."
          } , 
          {  
               title : "Secure Authentication",
               description : "Robust user registration and login system with focus on data privacy and account security."
          } , 
     ],
},
{
     slug: "aircraft-recognition",
     filter : ["react" , "electron"  , "nodejs"],
     cover : "/works/aircraft_recognition_01.png",
     thumbnail : "",
     source : "",
     title : "Aircraft Recognition",
     description : "An interactive educational desktop application designed for aviation enthusiasts and professionals to master aircraft identification and structural components through immersive learning.",
     projectDetail : {
          platform : "Desktop Application",
          supports : "Windows, macOS",
          stack : "React, Electron, Node.js" , 
          collaborator : "-"
     },
     features : [
          {
               title : "Interactive Lessons",
               description : "Structured curriculum covering aircraft types, engine configurations, and aerodynamic parts with knowledge assessment."
          },
          {
               title : "3D Model Visualization",
               description : "Explorative 3D viewer allowing users to interact with aircraft models and identify specific parts in a virtual space."
          },
          {
               title : "Performance Analytics",
               description : "Detailed score tracking and mistake analysis to help users focus on areas needing improvement."
          },
     ],
},
{
     slug: "touji-editor",
     filter : ["react" , "nextron"],
     cover : "/works/touji_01.png",
     thumbnail : "",
     image : [],
     title : "Touji Editor",
     source : "https://github.com/Heitclieff/Touji-Editor",
     description : "A minimalist, distraction-free text editor tailored for developers and writers who value clean typography and efficient file management.",
     projectDetail : {
          platform : "Desktop Application",
          supports : "Windows, macOS",
          stack : "React, Nextron (Next.js + Electron)" , 
          collaborator : "-"
     },
     features : [
          {
               title : "Integrated File Explorer" ,
               description : "Seamless directory navigation with the ability to manage projects without leaving the editor."
          },
          {
               title : "Intuitive Context Menus" ,
               description : "Quick access to essential file operations through a streamlined right-click interface."
          },
          {
               title : "Reliable Auto-Save",
               description :"Data integrity focus with background saving and manual override options."
          },
          {
               title : "Multi-Tab Workflow", 
               description : "Handle multiple files simultaneously with a performant tab management system."
          }
     ],
},
{
     slug: "weather",
     filter : ["react" , "next.js" , "website"],
     cover : "/works/weather_01.png",
     thumbnail : "https://www.youtube.com/embed/YOWKBzLpU-Q?si=CZdNupdCNkev8pAs",
     source :"https://github.com/Heitclieff/weather",
     title : "Weather",
     description : "A comprehensive weather monitoring dashboard providing localized meteorological data across Thailand with a focus on visual clarity and predictive accuracy.",
     projectDetail : {
          platform : "Web Application",
          supports : "Universal (Responsive Web)",
          stack : "React, Next.js, Weather API" , 
          collaborator : "Tobin Flankin, Apirat Worapanpisit, Grittidech Doungphasukroj"
     },
     features : [
          {
               title : "Real-time Monitoring"  , 
               description :"Live weather updates with precise current conditions and atmospheric data."
          },
          {
               title : "7-Day Forecasting",
               description: "Accurate predictive modeling providing users with short-term weather trends and planning insights."
          },
          {
               title : "Data Visualization",
               description: "Complex meteorological data transformed into easy-to-understand interactive graphs and charts."
          },
     ],
},
 {
      slug: "medical-inventory",
      filter: ["nextjs", "typescript", "tailwindcss", "postgresql"],
      cover: "/works/medical_inventory_01.png",
      thumbnail: "",
      title: "MedTrack: Medical Inventory",
      description: "A comprehensive medical inventory management solution designed for clinics and small hospitals, enabling real-time stock tracking and mobile-first operations through QR technology.",
      projectDetail: {
           platform: "Web & Mobile Web",
           supports: "All Devices (Browser-based)",
           stack: "Next.js, TypeScript, Prisma, PostgreSQL",
           collaborator: "Independent Project"
      },
      features: [
           {
                title: "Mobile QR Scanner",
                description: "Seamlessly scan medical supplies and equipment using a mobile camera to check-in/out stock without dedicated hardware."
           },
           {
                title: "Smart Inventory Control",
                description: "Advanced stock level monitoring with low-inventory alerts, expiration tracking, and multi-warehouse support."
           },
           {
                title: "Automated Reporting",
                description: "Generate detailed usage reports, financial summaries, and inventory audits in PDF/Excel formats with a single click."
           }
      ],
 },
]