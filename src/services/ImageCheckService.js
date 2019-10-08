
export default class ImageCheckService {

    checkUrlImage = async (url) => {
        try {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const res = await fetch( proxyurl + url );
            if(!res.ok){
                return 'invalid URL address';
            }
            if(url.match(/(images|image)|jpeg|jpg|gif|png|s375$/) === null) {
                return 'no image for this url';
            }
        } catch(e) {
            const errorString = 'Error ' + e.name + ":" + e.message;
            return errorString;
        } 
};
}