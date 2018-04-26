var Cesium = require('cesium/Cesium');
require('../Build/Cesium/Widgets/widgets.css');
require('./css/index.css');


//////////////////////////////////////////////////////////////////////////
// Creating the Viewer
//////////////////////////////////////////////////////////////////////////
//
var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false
});

//////////////////////////////////////////////////////////////////////////
// Loading Imagery
//////////////////////////////////////////////////////////////////////////

// Remove default base layer
viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
//
// Add Sentinel-2 imagery
viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({
    assetId: 3954
}));

//////////////////////////////////////////////////////////////////////////
// Loading Terrain
//////////////////////////////////////////////////////////////////////////

// Load Cesium World Terrain
viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask: true, // required for water effects
    requestVertexNormals: true // required for terrain lighting
});
// Enable depth testing so things behind the terrain disappear.
viewer.scene.globe.depthTestAgainstTerrain = true;
// Initilize entity polygons 
var madagascar = viewer.entities.add({
    name: 'Madagascar',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
            45.184717735645705, -25.793356420886475,
            45.611491929134679, -25.772769579533303,
            46.053508058105415, -25.642303382178127,
            47.26524192890448, -25.160410623898656,
            47.577701606280343, -24.385417882532774,
            47.882540315915321, -23.773135127923272,
            48.034959670732817, -23.031773069426908,
            48.339798380367803, -22.003959419946113,
            48.75133063837503, -20.548193923819738,
            49.086653218973524, -19.990572138912075,
            49.208588702827512, -19.337512575840076,
            49.658225799539117, -18.139514945846535,
            49.658225799539117, -17.922114001129255,
            50.260282251068212, -16.729008680694143,
            50.084999993028099, -16.316204928804527,
            50.504153218776196, -16.060046909405933,
            50.73278225100244, -15.31166360239123,
            50.33649192847696, -13.932738080599377,
            49.993548380137597, -12.601317106298509,
            49.345766122163255, -11.707310600775136,
            49.018064509305653, -11.796845202970312,
            48.454112896480922, -12.124887233844845,
            48.454112896480922, -12.660809325393066,
            47.63104838046646, -13.425511021491049,
            47.432903219203716, -14.44623374214467,
            46.411693541926518, -15.307988344396922,
            43.767217735843026, -16.158890082515498,
            43.538588703616782, -17.501050576681902,
            43.538588703616782, -18.494021431788177,
            44.026330639032757, -18.941529869055508,
            44.178749993850246, -19.78632907087934,
            43.82818547777002, -20.466106755596165,
            43.492862897171534, -20.787065771873273,
            42.974637090792058, -21.887325178297694,
            42.967016123051181, -22.141676258976037,
            43.195645155277425, -23.070341716562115,
            43.447137090726287, -23.441434584144197,
            43.454758058467164, -24.420118575214094,
            43.972983864846633, -25.346511437411859,
            43.972983864846633, -25.346511437411859,
            45.184717735645705, -25.793356420886475
        ]),
        height: 0,
        material: Cesium.Color.BLUE.withAlpha(0.1),
        outline: true,
        outlineColor: Cesium.Color.RED
    }
});
// Append entity description
madagascar.polygon.height = 100;
madagascar.polygon.extrudedHeight = 25000;

madagascar.description = '\
    <img\
    width="50%"\
    style="float:left; margin: 0 1em 1em 0;"\
    src="https://cdn.shopify.com/s/files/1/0133/1162/products/African_Safari_Madagascar_large.jpg?v=1357597674"/>\
    <p>\
        Home to some of the most unusual mammals and birds on Earth, many types of lemurs and birds\
        have never before been recorded in the entrancing context of their forest habitats as\
        represented on this CD.</p><p> Birds: (Ranomafana) white-throated oxylabe, green zorus,\
        Madagascar cuckoo shrike, Tylas vanga, drongo, Madagascar lesser cuckoo, Madagascar paradise\
        flycatcher, pitta-like ground goller spectacled bulbul, Madagascar scops-owl, cuckoo roller,\
        lesser vasa parrot. (Berenty) green sunbird, hook-billed vanga, sickle-billed vanga,\
        white headed vanga, Madagascar magpie robin, pied crow, Madagascar coucal, broad-billed\
        roller, blue coua.</p><p> Mammals: (Ranomafana) avahi, brown lemur, lesser mouse lemur. (Berenty)\
        ring-tailed lemur, greyu gentle lemur, Verreauxs sifaka, weasel lemur, fruit bat.\
    </p>\
    <p>\
    Source: \
    <a style="color: WHITE"\
        target="_blank"\
        href="https://wildstore.wildsanctuary.com/collections/soundscape-albums/products/african-safari-madagascar">Link</a>\
    </p>';


var carolina = viewer.entities.add({
    name: 'Carolina Woods',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([-81.29476813384494, 34.403127155915932, -81.29333920239351, 34.41805965289808, -81.29857861771536, 34.423167526688879, -81.30238910158580, 34.444381508173279, -81.31667841609993, 34.458128434461479, -81.32144152093798, 34.472658438795158, -81.32953879916266, 34.481296701737236, -81.34144656125776, 34.493859851250676, -81.35621218625573, 34.503673494997862, -81.36335684351280, 34.517018196499123, -81.37812246851075, 34.535854136658863, -81.37859877899454, 34.56331557850352, -81.38288557334878, 34.583709639054376, -81.39288809350868, 34.594296889441644, -81.37907508947836, 34.600570178983936, -81.37812246851075, 34.606842994719152, -81.38336188383259, 34.612331319786641, -81.38955392012206, 34.627226373152624, -81.39955644028195, 34.635848603170096, -81.40146168221717, 34.650347605227765, -81.40003275076574, 34.668369855994335, -81.40860633947423, 34.676596102102522, -81.41146420237706, 34.692654513491874, -81.40431954512000, 34.705577313763477, -81.40908264995805, 34.720064113933233, -81.40289061366857, 34.736896936501537, -81.39003023060585, 34.747464631122334, -81.39860381931434, 34.760770175398029, -81.42194303302076, 34.771334815574626, -81.44385331527578, 34.77994204108527, -81.45242690398427, 34.785027706841319, -81.46195311366035, 34.775638540561715, -81.46195311366035, 34.759987555670108, -81.48100553301254, 34.749812824126771, -81.49005543220482, 34.754117671242696, -81.50196319429994, 34.745507752622849, -81.51815775074932, 34.747464631122334, -81.52244454510355, 34.739245429900905, -81.54435482735857, 34.742768044841483, -81.56435986767836, 34.732591191909385, -81.57722025074109, 34.705968882266092, -81.59055694428762, 34.68599652578029, -81.60675150073697, 34.676596102102522, -81.61913557331590, 34.672287217936983, -81.63914061363570, 34.671895490079102, -81.65819303298788, 34.662885238062223, -81.66105089589072, 34.656616658724118, -81.68439010959714, 34.682079812276434, -81.68962952491899, 34.682079812276434, -81.73440271039662, 34.686388186939901, -81.74488154104032, 34.660926357956406, -81.77250754910100, 34.650739434961899, -81.80203879909690, 34.570375627138098, -81.80965976683778, 34.55507809756925, -81.82918849667376, 34.521335142378632, -81.82061490796526, 34.515448342534278, -81.81870966603006, 34.501318325852779, -81.82823587570614, 34.479726174995179, -81.83109373860897, 34.464019281589763, -81.84109625876888, 34.454593726675022, -81.82918849667376, 34.431025184733194, -81.81728073457864, 34.409414847979278, -81.79822831522645, 34.382688893332435, -81.76107609748969, 34.361459262186095, -81.73821319426707, 34.345336875187115, -81.69677418217607, 34.342583962638642, -81.66914817411539, 34.326457945786721, -81.63914061363570, 34.309148528225386, -81.60818043218840, 34.300099003073264, -81.58436490799816, 34.300885957015623, -81.55054686364802, 34.321737549554769, -81.50958416204082, 34.338651073653118, -81.46385835559557, 34.350449187278912, -81.43766127898634, 34.369715869189278, -81.40813002899044, 34.382295800913461, -81.38621974673542, 34.363032011962922, -81.37193043222127, 34.350449187278912, -81.33620714593593, 34.362245640764314, -81.29476813384494, 34.403127155915932]),
        height: 0,
        material: Cesium.Color.BLUE.withAlpha(0.1),
        outline: true,
        outlineColor: Cesium.Color.RED
    }
});
carolina.polygon.height = 100;
carolina.polygon.extrudedHeight = 1000;

carolina.description = '\
    <img\
    width="50%"\
    style="float:left; margin: 0 1em 1em 0;"\
    src="https://cdn.shopify.com/s/files/1/0133/1162/products/Carolina_Woods_large.jpg?v=1357597889"/>\
    <p>\
        Carolina Woods is located to the northwest of Columbia midway across the state and \
        represents a spring soundscape typical of that part of the southeastern United States.\
    </p>\
    <p>\
        We managed to capture a few quiet moments of magic over a period of dawns that remind us \
        of what this region must have sounded like just a few short centuries ago. \
    </p>\<p>\ Birds: Blue jay, American goldfinch, cardinal, mourning dove, flycatcher, lazuli bunting, \
        rose-breasted grosbeak, redheaded woodpecker, redthroated hummingbird, screech owl, \
        tanager, towhee, tree swallow.</p>\<p>\ Mammals: Red fox, woodchuck. \
    </p>\
    <p>\
    Source: \
    <a style="color: WHITE"\
        target="_blank"\
        href="https://wildstore.wildsanctuary.com/collections/soundscape-albums/products/carolina-woods">Link</a>\
    </p>';

var chippewa = viewer.entities.add({
    name: 'Chippewa National Forest',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([-94.074654724807985, 46.968242844613464, -93.768863394205397, 46.971493105841873, -93.784105329687137, 47.195284220529643, -93.832688999035227, 47.210817327920914, -93.86507811193394, 47.199167923758111, -93.869841216771974, 47.220523210522892, -93.824115410326741, 47.247690230999154, -93.832688999035227, 47.259328976439797, -93.788868434525185, 47.277428607413164, -93.818399684521069, 47.313609302269263, -93.893656740962214, 47.339437500064662, -93.936524684504633, 47.36073625617778, -93.946050894180729, 47.383961460452198, -93.962245450630093, 47.416846325135403, -93.976534765144223, 47.459372741406078, -93.989871458690757, 47.557181650077041, -94.009876499010559, 47.607302306834121, -94.026071055459923, 47.656733328123174, -94.077512587710814, 47.663149511019377, -94.115617426415199, 47.639405695556711, -94.155627507054788, 47.640689421034224, -94.198495450597193, 47.648391111505418, -94.239458152204392, 47.640047562238323, -94.238505531236797, 47.604090883596051, -94.245173878010064, 47.594455430880785, -94.269942023167, 47.607302306834121, -94.288994442520092, 47.589315797178166, -94.30804686187227, 47.575179201764655, -94.297568031228579, 47.552038356625964, -94.327099281224463, 47.54239332073378, -94.354725289285128, 47.552038356625964, -94.392830127989498, 47.552038356625964, -94.417598273147348, 47.543036378343047, -94.455703111851733, 47.50122122570253, -94.461418837657376, 47.516021166875902, -94.486186982815227, 47.470964889796463, -94.523339200551987, 47.477403867647268, -94.574780732802893, 47.461304943663798, -94.588117426349427, 47.449066463385236, -94.624317023118579, 47.442624013874848, -94.658611377952525, 47.422647405882927, -94.634795853762284, 47.40975524730522, -94.60621722473401, 47.402663214625903, -94.618601297312935, 47.380091303363763, -94.608122466669229, 47.347183496768537, -94.622411781183359, 47.333627256656754, -94.5966910150579, 47.31425516113363, -94.599548877960729, 47.287768474868606, -94.565254523126796, 47.28389126139826, -94.571922869900064, 47.262561507335661, -94.610980329572058, 47.271611543863969, -94.634795853762284, 47.247690230999154, -94.617648676345311, 47.201756901323719, -94.635748474729894, 47.194636909022044, -94.630032748924236, 47.168090338521353, -94.640511579567942, 47.160318099477884, -94.630985369891846, 47.14606604114141, -94.659563998920135, 47.13569850709402, -94.680521660207518, 47.104583774451989, -94.677663797304717, 46.969542972806636, -94.074654724807985, 46.968242844613464]),
        material: Cesium.Color.BLUE.withAlpha(0.1),
        outline: true,
        outlineColor: Cesium.Color.RED
    }
});
chippewa.polygon.height = 100;
chippewa.polygon.extrudedHeight = 2000;
chippewa.description = '\
    <img\
    width="50%"\
    style="float:left; margin: 0 1em 1em 0;"\
    src="https://cdn.shopify.com/s/files/1/0133/1162/products/ChippewaNightsCov_large.jpg?v=1357611237"/>\
    <p>\
      Curt Olson has the rare gift of transforming the biophonies of Central and Northern Minnesota in\Americas Midwest, into lovely soundscapes</p>\<p>\This one, from a remote lake in the Chippewa National\Forest, provides an especially poignant sense of place with an unusual story that unfolded in the\spring of 2008. Aside from tail slaps, beaver vocalizations have been especially difficult to\record. A bit more than 32 minutes into this recording, as the sun goes down, a beaver swims\in solitary circles around the small lake where where forest management workers had dynamitedhis lodge earlier that afternoon. In the process, not only was the animalﾒs home destroyed\but probably its offspring and mate, as well. It is one of the most remarkable lamentations\ﾖ a cry for sanity ﾖ in any of these collections.</p><p>Birds: Rose-breasted Grosbeak;Black-and-White Warbler; various other unspecified Warblers , Canada Goose;\various unspecified Ducks; Pilleated Woodpecker; Baltimore Oriole; American Robin;\Common Loon; Swamp Sparrow; Wilson\'s Snipe (winnowing); Red-Winged Blackbird;\Common Yellowthroat; Common Loon; Canada Goose; Thrush; Veery; Oven Bird;\American Robin; Warbling Veerio; Trumpeter Swan; Catbird;\Yellow-Bellied Sap Sucker; Winter Wren; Black and White Warbler;\Black-Capped Chickadee; Blue Jay; Kinglet; Rose-breasted Grosbeak;\White-throated Sparrow </p><p>Reptiles: Spring Peeper, Leopard Frog</p><p>Mammals: Pine Squirrel, Beaver</p>\
    </p>\
    <p>\
    Source: \
    <a style="color: WHITE"\
        target="_blank"\
        href="https://wildstore.wildsanctuary.com/collections/soundscape-albums/products/chippewa-nights">Link</a>\
    </p>';
var antarctica = viewer.entities.add({
    name: 'Antarctica',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([-178.757419329955411, -73.727637020254903, -165.832258041431999, -77.934913333082264, -127.788387078985821, -71.853488209853793, -109.74193546859469, -73.727637020254903, -90.476129019663603, -70.353648692193403, -81.94064514988402, -72.303717000103816, -59.016774185333091, -61.961902834191811, -50.237419347845524, -75.535278281483016, -32.678709672870333, -76.421297056875034, -8.779354837487512, -68.557539848692727,
            31.459354834330547, -67.461954874882224,
            57.553548379085292, -64.381702135855434,
            78.28258063426432, -67.555246301696144,
            105.352258049851073, -62.75385368829123,
            151.199999978952832, -65.212401643754006,
            174.367741911211795, -70.999170725803609,
            177.538064491415582, -76.073462295720716,
            178.757419329955553, -83.63837708459765,
            2.926451612495948, -84.834134655382485, -109.74193546859469, -84.723173145640658, -177.53806449141544, -84.877864933748711, -179.489032233079342, -77.985781957267008, -178.757419329955411, -73.727637020254903
        ]),
        material: Cesium.Color.BLUE.withAlpha(0.1),
        outline: true,
        outlineColor: Cesium.Color.RED
    }
});

antarctica.polygon.height = 100;
antarctica.polygon.extrudedHeight = 75000;
antarctica.description = '\
    <img\
    width="50%"\
    style="float:left; margin: 0 1em 1em 0;"\
    src="https://cdn.shopify.com/s/files/1/0133/1162/products/Antarctica_large.jpg?v=1357597813"/>\
    <p>\
        Hauntingly beautiful soundscapes of life in the coldest region of the planet. Listen to\
         a world under the sea ice with songs of Weddell and Leopard Seals, Adelie and Emperor\
          Penguins and the groaning and creaking of glaciers as they form the moraine.</p><p>Birds:\
           Adelie penguins, Emperor penguins.</p><p> Mammals: Leopard seals, Weddell seals, orcas. \
    </p>\
    <p>\
    Source: \
    <a style="color: WHITE"\
        target="_blank"\
        href="https://wildstore.wildsanctuary.com/collections/soundscape-albums/products/antarctica">Link</a>\
    </p>';
// Handle legend dropdown navigation logic and audio switching logic
var tileStyle = document.getElementById('album_option');

function set3DTileStyle() {
    var selectedStyle = album_option.options[album_option.selectedIndex].value;
    if (selectedStyle === 'madagascar') {
        viewer.flyTo(madagascar);
        viewer.selectedEntity = madagascar;
        var playmp3 = document.getElementById("audio_mp3");
        var loadmp3 = document.getElementById("audio_controls");
        playmp3.src = "./audio/madagascar.mp3";
        loadmp3.load()
        var toggstat = document.getElementById("switch1");
        if (toggstat.checked = true) {
            toggstat.checked = false;
        }
    } else if (selectedStyle === 'carolina') {
        viewer.flyTo(carolina);
        viewer.selectedEntity = carolina;
        var playmp3 = document.getElementById("audio_mp3");
        var loadmp3 = document.getElementById("audio_controls");
        playmp3.src = "./audio/carolina_woods.mp3";
        loadmp3.load()
        var toggstat = document.getElementById("switch1");
        if (toggstat.checked = true) {
            toggstat.checked = false;
        }
    } else if (selectedStyle === 'chippewa') {
        viewer.flyTo(chippewa);
        viewer.selectedEntity = chippewa;
        var playmp3 = document.getElementById("audio_mp3");
        var loadmp3 = document.getElementById("audio_controls");
        playmp3.src = "./audio/chippewa_nights.mp3";
        loadmp3.load()
        var toggstat = document.getElementById("switch1");
        if (toggstat.checked = true) {
            toggstat.checked = false;
        }
    } else if (selectedStyle === 'antarctica') {
        viewer.flyTo(antarctica);
        viewer.selectedEntity = antarctica;
        var playmp3 = document.getElementById("audio_mp3");
        var loadmp3 = document.getElementById("audio_controls");
        playmp3.src = "./audio/antarctica.mp3";
        loadmp3.load()
        var toggstat = document.getElementById("switch1");
        if (toggstat.checked = true) {
            toggstat.checked = false;
        }
    }
}
var toggleStatus = document.getElementById("switch1");

function toggleLayer() {
    var toggstat = switch1.checked;
    if (toggstat = true) {
        var ent = viewer.selectedEntity;
        ent.show = !ent.show;
    }
}
tileStyle.addEventListener('change', set3DTileStyle);
toggleStatus.addEventListener('change', toggleLayer);