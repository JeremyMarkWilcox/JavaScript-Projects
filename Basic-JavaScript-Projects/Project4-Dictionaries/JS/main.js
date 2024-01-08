//Dictionary Describing a YuYu Hakusho Character
function YuYu_Hakusho() {
    //List of attributes and behaviors
    var Yusuke_Urameshi = {
        Species:"Human",
        Hair_color: "Dark Brown",
        Ethnicity: "Japanese",
        Age: 14,
        Title: "Spirit Detective",
        Sound:"I'll waste you!",
        Special_Move: "Spirit Gun"
    };
    //Will display Spirit Gun in the document, not anymore because of the delete project
    delete Yusuke_Urameshi.Special_Move
    document.getElementById("Dictionary").innerHTML = Yusuke_Urameshi.Special_Move;
}
