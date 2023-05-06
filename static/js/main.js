$(document).ready(function () {
    // Init
      // Auto typing
    //   let user=document.getElementById('mainTitle').value;
    //   console.log(user);
    let title = 'Waste-Wise';
    var typed = new Typed(".auto-input",{
      strings: ['We are '+ title.bold(), 'We help you to manage waste smartly.'],
      typeSpeed: 100,
      backSpeed:100,
      loop:true
    })
// Auto typing
    // modal init
    // $('.card').click(function() {
    //     $('#modalButtonPress').trigger('click');
    //   });

    
    // modal init
    $('.image-section').hide();
    $('#predict-btn').hide();
    $('.loader').hide();
    $('#result').hide();
    $('#btn-predict').hide();
    $('#btn-refresh').click(function () {
        window.location.reload();
    });
    
    $('#chooseImage-btn').click(function () {
        $('#imageUpload').click();
    }
    );
    const preDefinedData = [
        {
            type:"Battery",
            description:"Battery recycling is a recycling activity that aims to reduce the number of batteries being disposed as municipal solid waste. Batteries contain a number of heavy metals and toxic chemicals and disposing of them by the same process as regular household waste has raised concerns over soil contamination and water pollution.<br><br> Most types of batteries can be recycled. However, some batteries are recycled more readily than others, such as lead–acid automotive batteries (nearly 90% are recycled) and button cells (because of the value and toxicity of their chemicals). Rechargeable nickel-cadmium (Ni-Cd), nickel metal hydride (Ni-MH), lithium-ion (Li-ion) and nickel–zinc (Ni-Zn), can also be recycled. There is currently no cost-neutral recycling option available for disposable alkaline batteries, though consumer disposal guidelines vary by region."
        },
        
        {
            type:"Clothes",
            description:"Textile recycling is the process of recovering fiber, yarn or fabric and reprocessing the textile material into useful products. Textile waste products are gathered from different sources and are then sorted and processed depending on their condition, composition, and resale value. The end result of this processing can vary, from the production of energy and chemicals to new articles of clothing.<br><br>Due to a recent trend of over consumption and waste generation in global fashion culture, textile recycling has become a key focus of worldwide sustainability efforts. Globalization has led to a \"fast fashion\" trend where clothes are considered by many consumers to be disposable due to their increasingly lower prices. The development of recycled technology has allowed the textile industry to produce vast amounts of products that deplete natural resources."
        },
        
        {
            type:"E-waste",
            description:"Electronic waste or e-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste. Informal processing of e-waste in developing countries can lead to adverse human health effects and environmental pollution.<br><br>Electronic scrap components, such as CPUs, contain potentially harmful materials such as lead, cadmium, beryllium, or brominated flame retardants. Recycling and disposal of e-waste may involve significant risk to health of workers and their communities.<br><br>E-waste or electronic waste is created when an electronic product is discarded after the end of its useful life. The rapid expansion of technology and the consumption driven society results in the creation of a very large amount of e-waste in every minute."
        },
        {
            type:"Glass",
            description:"Glass recycling is the processing of waste glass into usable products. Glass that is crushed and ready to be remelted is called cullet. There are two types of cullet: internal and external. Internal cullet is composed of defective products detected and rejected by a quality control process during the industrial process of glass manufacturing, transition phases of product changes (such as thickness and colour changes) and production offcuts. External cullet is waste glass that has been collected or reprocessed with the purpose of recycling. External cullet (which can be pre- or post-consumer) is classified as waste. The word \"cullet\", when used in the context of end-of-waste, will always refer to external cullet.<br><br>To be recycled, glass waste needs to be purified and cleaned of contamination. Then, depending on the end use and local processing capabilities, it might also have to be separated into different colors. Many recyclers collect different colors of glass separately since glass retains its color after recycling."
        },
        
        {
            type:"Light Blubs",
            description:"Recycling prevents the release of hazardous materials into the environment. Mercury, an extremely toxic heavy metal, is used in fluorescent light bulbs to increase energy efficiency. In addition to mercury, some HID bulbs contain radioactive substances like Krypton-85 and thorium used for quick and easy light ignition.<br><br>LEDs on the other hand do not contain mercury; but, they do contain nickel, lead, and trace amounts of arsenic. Light bulbs often break when thrown into a dumpster, trash can or compactor, or when they end up in a landfill or incinerator. This causes the release of hazardous materials into the environment and can create serious public and environmental health concerns.<br><br>It’s also important to remember that recycling allows the reuse of the glass, metals and other materials that make up light bulbs. Virtually all components of light bulbs can be recycled."
        },
        
        {
            type:"Metal",
            description:"Several kinds and also large amounts of metals are used in industrial processes every day. Since the industrial revolution period has taken place, our consumption levels skyrocketed due to the mass production of goods and the resulting low unit price.<br><br>The most consumed metal worldwide is aluminum, followed by copper, zinc, lead and nickel. Moreover, some precious materials like gold are used for our computers and other electronic devices.<br><br>Metal is therefore crucial to sustaining our living standard. However, metals are resources that are limited. The depletion of metals can be a big issue in the future since the world population grows rapidly and thus also the demand for goods made out of metal will increase.<br><br>To mitigate the problem of metal depletion, we have to look out for effective measures. One of those measures could be metal recycling."
        },
        
        {
            type:"Organic",
            description:"Organic wastes contain materials which originated from living organisms. There are many types of organic wastes and they can be found in municipal solid waste , industrial solid waste , agricultural waste, and wastewaters. Organic wastes are often disposed of with other wastes in landfills or incinerators, but since they are biodegradable , some organic wastes are suitable for composting and land application.<br><br>Organic materials found in municipal solid waste include food, paper, wood, sewage sludge , and yard waste. Because of recent shortages in landfill capacity, the number of municipal composting sites for yard wastes is increasing across the country, as is the number of citizens who compost yard wastes in their backyards. On a more limited basis, some mixed municipal waste composting is also taking place. In these systems, attempts to remove inorganic materials are made prior to composting.<br><br>Food waste from restaurants and grocery stores is typically disposed of through garbage disposals, therefore, it becomes a component of wastewater and sewage sludge."
        },
        
        {
            type:"Paper",
            description:"The recycling of paper is the process by which waste paper is turned into new paper products. It has a number of important benefits: It saves waste paper from occupying homes of people and producing methane as it breaks down. Because paper fibre contains carbon (originally absorbed by the tree from which it was produced), recycling keeps the carbon locked up for longer and out of the atmosphere. Around two-thirds of all paper products in the US are now recovered and recycled, although it does not all become new paper. After repeated processing the fibres become too short for the production of new paper - this is why virgin fibre (from sustainably farmed trees) is frequently added to the pulp recipe.<br><br>Paper recycling pertains to the processes of reprocessing waste paper for reuse. Waste papers are either obtained from paper mill paper scraps, discarded paper materials, and waste paper material discarded after consumer use. Examples of the commonly known papers recycled are old newspapers and magazines."
        },
        
        {
            type:"Plastic",
            description:"Plastic recycling is the process of recovering scrap or waste plastic and reprocessing the material into useful products. Due to purposefully misleading symbols on plastic packaging and numerous technical hurdles, less than 10% of plastic has ever been recycled. Compared with the lucrative recycling of metal, and similar to the low value of glass recycling, plastic polymers recycling is often more challenging because of low density and low value.<br><br>Materials recovery facilities are responsible for sorting and processing plastics. As of 2019, due to limitations in their economic viability, these facilities have struggled to make a meaningful contribution to the plastic supply chain. The plastics industry has known since at least the 1970s that recycling of most plastics is unlikely because of these limitations. However, the industry has lobbied for the expansion of recycling while these companies have continued to increase the amount of virgin plastic being produced."
        },
        {
            type:"Medical",
            description:"Medical waste is any waste that is generated by healthcare facilities such as hospitals, clinics, dental practices, laboratories, and veterinary clinics, as well as medical research facilities and even homes. Medical waste can contain hazardous materials such as infectious agents, pharmaceuticals, and other chemicals that can pose a threat to human health and the environment if not disposed of properly. Medical waste management involves a range of activities, including segregation, handling, storage, transportation, treatment, and disposal. Proper management of medical waste is crucial to prevent the spread of infections, minimize occupational hazards, and protect the environment from the harmful effects of hazardous materials. The World Health Organization has established guidelines for the safe management of medical waste, which involve categorizing waste according to its risk level, using appropriate containers and packaging, and employing appropriate treatment and disposal methods."
        },
        
    ]
    // init crousel
    $('.carousel .carousel-item').each(function () {
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });
    // init crousel
    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                // $('#imagePreview').hide();
                // $('#imagePreview').fadeIn(650);
                $('.imagePreview').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        $('#upload-file').hide();
        $('#chooseImage-btn').hide();
        $('.imageHero').hide();
        $('#predict-btn').show();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();
      
        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                // $('#result').text(' Result:  ' + JSON.stringify(data));
                preDefinedData.map((item) => {
                    if (item.type.toLowerCase() === data.waste_type.toLowerCase()) {
                        $('.overlay__title').html("Garbage Type: " +item.type);
                        $('#result').html('<small id="small">' + item.description + '</small>');
                        $('#generalDesc').hide();
                        $('#chooseImage-btn').hide();

                        $('#result').show();
                        
                    }
                })
                console.log('Success!',data);
            },
        });
    });

});

const preDefinedData = [
    {
        type:"Battery",
        description:"Battery recycling is a recycling activity that aims to reduce the number of batteries being disposed as municipal solid waste. Batteries contain a number of heavy metals and toxic chemicals and disposing of them by the same process as regular household waste has raised concerns over soil contamination and water pollution.<br><br> Most types of batteries can be recycled. However, some batteries are recycled more readily than others, such as lead–acid automotive batteries (nearly 90% are recycled) and button cells (because of the value and toxicity of their chemicals). Rechargeable nickel-cadmium (Ni-Cd), nickel metal hydride (Ni-MH), lithium-ion (Li-ion) and nickel–zinc (Ni-Zn), can also be recycled. There is currently no cost-neutral recycling option available for disposable alkaline batteries, though consumer disposal guidelines vary by region."
    },
    
    {
        type:"Clothes",
        description:"Textile recycling is the process of recovering fiber, yarn or fabric and reprocessing the textile material into useful products. Textile waste products are gathered from different sources and are then sorted and processed depending on their condition, composition, and resale value. The end result of this processing can vary, from the production of energy and chemicals to new articles of clothing.<br><br>Due to a recent trend of over consumption and waste generation in global fashion culture, textile recycling has become a key focus of worldwide sustainability efforts. Globalization has led to a \"fast fashion\" trend where clothes are considered by many consumers to be disposable due to their increasingly lower prices. The development of recycled technology has allowed the textile industry to produce vast amounts of products that deplete natural resources."
    },
    
    {
        type:"E-waste",
        description:"Electronic waste or e-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste. Informal processing of e-waste in developing countries can lead to adverse human health effects and environmental pollution.<br><br>Electronic scrap components, such as CPUs, contain potentially harmful materials such as lead, cadmium, beryllium, or brominated flame retardants. Recycling and disposal of e-waste may involve significant risk to health of workers and their communities.<br><br>E-waste or electronic waste is created when an electronic product is discarded after the end of its useful life. The rapid expansion of technology and the consumption driven society results in the creation of a very large amount of e-waste in every minute."
    },
    {
        type:"Glass",
        description:"Glass recycling is the processing of waste glass into usable products. Glass that is crushed and ready to be remelted is called cullet. There are two types of cullet: internal and external. Internal cullet is composed of defective products detected and rejected by a quality control process during the industrial process of glass manufacturing, transition phases of product changes (such as thickness and colour changes) and production offcuts. External cullet is waste glass that has been collected or reprocessed with the purpose of recycling. External cullet (which can be pre- or post-consumer) is classified as waste. The word \"cullet\", when used in the context of end-of-waste, will always refer to external cullet.<br><br>To be recycled, glass waste needs to be purified and cleaned of contamination. Then, depending on the end use and local processing capabilities, it might also have to be separated into different colors. Many recyclers collect different colors of glass separately since glass retains its color after recycling."
    },
    
    {
        type:"Light Blubs",
        description:"Recycling prevents the release of hazardous materials into the environment. Mercury, an extremely toxic heavy metal, is used in fluorescent light bulbs to increase energy efficiency. In addition to mercury, some HID bulbs contain radioactive substances like Krypton-85 and thorium used for quick and easy light ignition.<br><br>LEDs on the other hand do not contain mercury; but, they do contain nickel, lead, and trace amounts of arsenic. Light bulbs often break when thrown into a dumpster, trash can or compactor, or when they end up in a landfill or incinerator. This causes the release of hazardous materials into the environment and can create serious public and environmental health concerns.<br><br>It’s also important to remember that recycling allows the reuse of the glass, metals and other materials that make up light bulbs. Virtually all components of light bulbs can be recycled."
    },
    
    {
        type:"Metal",
        description:"Several kinds and also large amounts of metals are used in industrial processes every day. Since the industrial revolution period has taken place, our consumption levels skyrocketed due to the mass production of goods and the resulting low unit price.<br><br>The most consumed metal worldwide is aluminum, followed by copper, zinc, lead and nickel. Moreover, some precious materials like gold are used for our computers and other electronic devices.<br><br>Metal is therefore crucial to sustaining our living standard. However, metals are resources that are limited. The depletion of metals can be a big issue in the future since the world population grows rapidly and thus also the demand for goods made out of metal will increase.<br><br>To mitigate the problem of metal depletion, we have to look out for effective measures. One of those measures could be metal recycling."
    },
    
    {
        type:"Organic",
        description:"Organic wastes contain materials which originated from living organisms. There are many types of organic wastes and they can be found in municipal solid waste , industrial solid waste , agricultural waste, and wastewaters. Organic wastes are often disposed of with other wastes in landfills or incinerators, but since they are biodegradable , some organic wastes are suitable for composting and land application.<br><br>Organic materials found in municipal solid waste include food, paper, wood, sewage sludge , and yard waste. Because of recent shortages in landfill capacity, the number of municipal composting sites for yard wastes is increasing across the country, as is the number of citizens who compost yard wastes in their backyards. On a more limited basis, some mixed municipal waste composting is also taking place. In these systems, attempts to remove inorganic materials are made prior to composting.<br><br>Food waste from restaurants and grocery stores is typically disposed of through garbage disposals, therefore, it becomes a component of wastewater and sewage sludge."
    },
    
    {
        type:"Paper",
        description:"The recycling of paper is the process by which waste paper is turned into new paper products. It has a number of important benefits: It saves waste paper from occupying homes of people and producing methane as it breaks down. Because paper fibre contains carbon (originally absorbed by the tree from which it was produced), recycling keeps the carbon locked up for longer and out of the atmosphere. Around two-thirds of all paper products in the US are now recovered and recycled, although it does not all become new paper. After repeated processing the fibres become too short for the production of new paper - this is why virgin fibre (from sustainably farmed trees) is frequently added to the pulp recipe.<br><br>Paper recycling pertains to the processes of reprocessing waste paper for reuse. Waste papers are either obtained from paper mill paper scraps, discarded paper materials, and waste paper material discarded after consumer use. Examples of the commonly known papers recycled are old newspapers and magazines."
    },
    
    {
        type:"Plastic",
        description:"Plastic recycling is the process of recovering scrap or waste plastic and reprocessing the material into useful products. Due to purposefully misleading symbols on plastic packaging and numerous technical hurdles, less than 10% of plastic has ever been recycled. Compared with the lucrative recycling of metal, and similar to the low value of glass recycling, plastic polymers recycling is often more challenging because of low density and low value.<br><br>Materials recovery facilities are responsible for sorting and processing plastics. As of 2019, due to limitations in their economic viability, these facilities have struggled to make a meaningful contribution to the plastic supply chain. The plastics industry has known since at least the 1970s that recycling of most plastics is unlikely because of these limitations. However, the industry has lobbied for the expansion of recycling while these companies have continued to increase the amount of virgin plastic being produced."
    },
    {
        type:"Medical",
        description:"Medical waste is any waste that is generated by healthcare facilities such as hospitals, clinics, dental practices, laboratories, and veterinary clinics, as well as medical research facilities and even homes. Medical waste can contain hazardous materials such as infectious agents, pharmaceuticals, and other chemicals that can pose a threat to human health and the environment if not disposed of properly. Medical waste management involves a range of activities, including segregation, handling, storage, transportation, treatment, and disposal. Proper management of medical waste is crucial to prevent the spread of infections, minimize occupational hazards, and protect the environment from the harmful effects of hazardous materials. The World Health Organization has established guidelines for the safe management of medical waste, which involve categorizing waste according to its risk level, using appropriate containers and packaging, and employing appropriate treatment and disposal methods."
    },
    
]
function openModal(e) {
    let CardTitle = e.querySelector(".cardTitle").title.trim();
    let imageSrc = e.querySelector(".img-fluid").src;
    console.log("Image src", imageSrc);
    console.log("The value arrary is ", CardTitle)
    preDefinedData.map((item) => {
        if (item.type.toLowerCase() === CardTitle.toLowerCase() ) {
            console.log(item.description)
            document.getElementById("ModalInfo").innerHTML = item.description;
            document.getElementById("exampleModalLabel").innerHTML = item.type;
            document.getElementById("modalButtonPress").click();
            document.getElementById("img-src-modal").setAttribute("src", imageSrc);
            
        }
    })
}