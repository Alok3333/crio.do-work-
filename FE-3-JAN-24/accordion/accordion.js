const social = [
    {
        name: "Instagram",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum facere maxime suscipit"
    },
    {
        name: "Whatsapp",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum facere maxime suscipit"
    },
    {
        name: "Snapchat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum facere maxime suscipit"
    },
    {
        name: "Facebook",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum facere maxime suscipit"
    }
];

const uniqueId = () => Math.random().toString(36).substr(2,9);

const accordionElement = document.getElementById("accordionExample");

const showData = () => {
    social.forEach((item, index) => {
        const accordionId = uniqueId();
        // console.log(accordionId);
        const accordionItemEle = document.createElement("div");
        accordionItemEle.classList = "accordion-item";
        accordionItemEle.innerHTML = `
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${accordionId}" aria-expanded="true" aria-controls="collapseOne${accordionId}">
                <i class="fa-solid fa-angle-down"></i>
                ${item.name} ${index+1}
                </button>
            </h2> 
            <div id="collapseOne${accordionId}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>${item.description}</p>
                </div>
            </div>
        `;

        accordionElement.append(accordionItemEle);
    })
}

showData();

