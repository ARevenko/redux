class Genre {
    constructor(object) {
        if(object){
            this.id = object.Id;
            this.name = object.Name;
            this.beautifulUrl = object.BeautifulUrl;
            this.visible = object.Visible;
        }else{
            this.resetValue();
        }
    };

    resetValue(){
        this.id = null;
        this.name = null;
        this.beautifulUrl = null;
        this.visible = false;
    }
};

export default Genre;