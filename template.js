let data = [
   {
       //https://www.id-home.net/knowledge/%E4%B8%80%E5%9D%AA%E3%81%AF%E4%BD%95%E5%B9%B3%E7%B1%B3%EF%BC%9F%E4%BD%95%E7%95%B3%EF%BC%9F%E9%9D%A2%E7%A9%8D%E6%8F%9B%E7%AE%97%E4%B8%80%E8%A6%A7%E8%A1%A8/
        unitOne:"m2",
        unitTwo:"tsubo",
        multiplier:0.3025,
        desc:"Tsubo (坪) is a unit used in Japan for floorspace. Meters squared (m2) is a unit used around the world for floorspace and is sometimes called heibei (平米) in Japanese. This calculator uses the standard tsubo, as used by many large real estate agencies. But depending on the region, the size of a tsubo may be slightly different.",
    },
   {
       //https://kw-note.com/notation/jou/
        unitOne:"jo",
        unitTwo:"m2",
        multiplier:1.62, 
        desc:"Jo (畳) is a unit used in Japan for floorspace. It represents one tatami mat. Meters squared (m2) is a unit used around the world for floorspace and is sometimes called heibei (平米) in Japanese. This calculator uses the standard jo, as used by many large real estate agencies. But depending on the region, the size of a jo may be slightly different."
   }
];

let nav = '';
let html = '';

data.forEach(v => {

    nav += `<a href="#${v['unitOne']}To${v['unitTwo']}Link">${v['unitOne']} and ${v['unitTwo']}</a> | `;
    html+=
    `<div class="card my-5">
        <div class="card-header">
            <a id="${v['unitOne']}To${v['unitTwo']}Link">${v['unitOne']} and ${v['unitTwo']}</a>
        </div>
        <div class="card-body">
            <p>${v['desc']}${data[v]}</p>

            <div class="row mb-2">
                <div class="col">
                    <p>Formula: ${v['unitOne']} <span id="${v['unitOne']}To${v['unitTwo']}Operator">*</span> <span id="${v['unitOne']}To${v['unitTwo']}Multiplier">${v['multiplier']}</span> = ${v['unitTwo']}</p>
                </div>
                <div class="col-3">
                </div>
                <div class="col">
                    <p>Formula: ${v['unitTwo']} <span id="${v['unitTwo']}To${v['unitOne']}Operator">/</span> <span id="${v['unitTwo']}To${v['unitOne']}Multiplier">${v['multiplier']}</span> = ${v['unitOne']}</p>
                </div>
            </div>
            <!---https://www.id-home.net/knowledge/%E4%B8%80%E5%9D%AA%E3%81%AF%E4%BD%95%E5%B9%B3%E7%B1%B3%EF%BC%9F%E4%BD%95%E7%95%B3%EF%BC%9F%E9%9D%A2%E7%A9%8D%E6%8F%9B%E7%AE%97%E4%B8%80%E8%A6%A7%E8%A1%A8/-->
                
            <!-- From unitOne -->
            <form id="${v['unitOne']}To${v['unitTwo']}Form">
                <div class="row mb-5">
                    <div class="col">
                        <div class="input-group">
                            <input type="text" class="form-control" id="${v['unitOne']}To${v['unitTwo']}Input" placeholder="Input ${v['unitOne']}">
                            <span class="input-group-text">${v['unitOne']}</span>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <button type="submit" id="${v['unitOne']}To${v['unitTwo']}Button" class="btn btn-primary">To ${v['unitTwo']}</button>
                    </div>
                    <div class="col">
                        <div class="input-group pb-2">
                            <input type="text" class="form-control" id="${v['unitOne']}To${v['unitTwo']}Output" disabled readonly>
                            <span class="input-group-text">${v['unitTwo']}</span>
                        </div>
                    </div>
                </div>
                </form>

                <!-- From unitTwo -->
            <form id="${v['unitTwo']}To${v['unitOne']}Form">
                <div class="row">
                    <div class="col">
                        <div class="input-group">
                            <input type="text" class="form-control" id="${v['unitTwo']}To${v['unitOne']}Input" placeholder="Input ${v['unitTwo']}">
                            <span class="input-group-text">${v['unitTwo']}</span>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <button type="submit" id="${v['unitTwo']}To${v['unitOne']}Button" class="btn btn-primary">To ${v['unitOne']}</button>
                    </div>
                    <div class="col">
                        <div class="input-group pb-2">
                            <input type="text" class="form-control" id="${v['unitTwo']}To${v['unitOne']}Output" disabled readonly>
                            <span class="input-group-text">${v['unitOne']}</span>
                        </div>
                    </div>    
                </div>
            </form>
        </div>
    </div>
`;
});

//add regex
const navSection = document.querySelector('nav');

navSection.innerHTML = nav;
page.innerHTML = html;