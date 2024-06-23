let eldestParent = document.getElementById("main");

// element content
let contentElement = document.createElement("div");
let contentElementAttribute = document.createAttribute("id");
contentElementAttribute.value = "content";
contentElement.setAttributeNode(contentElementAttribute);
eldestParent.appendChild(contentElement);

let counter = 2;

for (let i = 1; i <= counter; i++) {
   // element content post

   let contentPostsElement = document.createElement("div");
   contentPostsElement.setAttribute("class", "content-post");
   contentElement.appendChild(contentPostsElement);

   // element judul

   let titleElement = document.createElement("h1");

   if (i === 1) {
      let titleText = document.createTextNode(`Judul Post`);
      titleElement.appendChild(titleText);
   } else {
      let titleText = document.createTextNode(`Judul Post ${i}`);
      titleElement.appendChild(titleText);
   }

   contentPostsElement.appendChild(titleElement);

   // time publish element

   let timePublishElement = document.createElement("span");
   let textPublish = document.createTextNode(`Published on ${i + 11} May 2016`);
   timePublishElement.appendChild(textPublish);
   contentPostsElement.appendChild(timePublishElement);

   // paragraph description element

   let paragraphDescriptionElement = document.createElement("p");
   let textParagraph = document.createTextNode(`Lorem Ipsum Dolor Sit Amet`);
   paragraphDescriptionElement.appendChild(textParagraph);
   contentPostsElement.appendChild(paragraphDescriptionElement);

   // button share post element

   let buttonSharePostElement = document.createElement("button");
   buttonSharePostElement.setAttribute("class", "btn-share-post");
   let textButton = document.createTextNode(`Share This Post`);
   buttonSharePostElement.appendChild(textButton);
   contentPostsElement.appendChild(buttonSharePostElement);

   buttonSharePostElement.addEventListener(`click`, function () {
      return alert(`You have shared this post`);
   });
}
