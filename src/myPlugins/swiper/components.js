import Swiper from "swiper";

export default (editor, opts = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType("default");
  const defaultView = defaultType.view;
  dc.addType(opts.name, {
    model: {
      defaults: {
        traits: [
          {
            type: "checkbox",
            name: "dynamicProgress",
            label: "Dynamic Progress",
            changeProp: 1,
          },
          {
            type: "select",
            name: "progressType",
            label: "Progress Type",
            changeProp: 1,
            options: [
              { value: "bullets", name: "Bullets" },
              { value: "fraction", name: "Fraction" },
              { value: "progressbar", name: "Progressbar" },
            ],
          },
        ],
        script: function (){
          alert('Script Function Running.....');
          const dynamicProgress = "{[ dynamicProgress ]}";
          const progressType = "{[ progressType ]}";
          const initLib = function () {
            alert('initLib Function Running....')
            const swiper = new Swiper(".mySwiper", {
              spaceBetween: 30,
              allowSlideNext:true,
              allowSlidePrev:true,
              centeredSlides: true,
              autoplay: {
                delay: 1500,
                disableOnInteraction: false,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: !!dynamicProgress,
                type: progressType,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
            console.log("swiper :>> ", swiper);
          };
          if (typeof Swiper == "undefined") {
            alert('Condition: typeof Swiper == undefined')
            const script = document.createElement("script");
            script.onload = initLib;
            // script.src = "https://unpkg.com/swiper@7/swiper-bundle.min.js";
            script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
            document.body.appendChild(script);
          } else {
            alert('else: Go to initLib Function')
            initLib();
          }
        },
      },
    },
    isComponent: (el) => {
      if (el.className && el.className.includes("swiper-container")) {
        return {
          type: opts.name,
        };
      }
    },
    view: defaultView.extend({
      init({ model }) {
        this.listenTo(model, "change:dynamicProgress", this.updateScript);
        this.listenTo(model, "change:progressType", this.updateScript);
      },
    }),
  });
};