import { useEffect, useState } from "react";
//import { useLoaderData } from "react-router-dom";

const Github:React.FunctionComponent = () => {
   

    type Username = string;
    type Avatarurl = string;
    type Followers = string ;
    type Following  = string ;
    type Location = string ;
    type Bio = string ;


    interface GithubData {
        userName:Username;
        avatarUrl:Avatarurl;
        followers:Followers;
        following:Following;
        location:Location;
        bio:Bio;
    }

    const [imageUrl, setImageUrl] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<null | string>();
    //@ts-ignore
    const [data, setData] = useState<GithubData | null>();

    const handleDataNotFound = () => {
        const info:GithubData = {
            userName:"NOT AVAILABLE",
            avatarUrl:"NOT AVAILABLE",
            bio:"NOT AVAILABLE",
            followers:"NOT AVAILABLE",
            following:"NOT AVAILABLE",
            location:"NOT AVAILABLE"
        }

        setData(info);
    }
    const handleData = (data:any) => {
        const info:GithubData = {
            userName:data.login,
            avatarUrl:data.avatar_url,
            bio:data.bio,
            followers:data.followers,
            following:data.following,
            location:data.location
        }

        setData(info);
    }

    const handleImageLoadError = () => {
        setImageUrl("./unknown_person.png");
    }

    const getDataFromGithub = async ():Promise<void>  => {
        
        setErrorMessage(null);

        try {
            const response:any = await fetch("https://api.github.com/users/AryanTapre");
            const data = await response.json(); 

            

            if(data) {
                setImageUrl(data.avatar_url)
                handleData(data);
                
            } else {
                handleImageLoadError();
                handleDataNotFound();
                
            }
              
        } 
        catch (error) {
            alert("unable to load your data! NO INTERNET CONNECTION")
            setErrorMessage("Somwthing went wrong!.");
            handleImageLoadError();
            handleDataNotFound();
        }
    }

    useEffect(() => {
        getDataFromGithub();    
    },[])

    return (
        <>
            
            <div className="main bg-slate-500 h-screen w-screen  inline-flex  justify-center   text-white px-4 py-10">
                <div className="">
                    <div className="image-container w-32 h-32 mb-3">    
                        <img src={imageUrl} alt={`${data?.userName} as Avatar`} onError={handleImageLoadError} className="shadow-xl rounded-xl"></img>
                    </div>
                    <div className="info text-white  font-medium text">
                        <label htmlFor="name">Name : </label> {data?.userName} 
                    </div>
                    <div className="info text-white  font-medium text">
                        <label htmlFor="bio">Bio : </label> {data?.bio}
                    </div>
                    <div className="info text-white  font-medium text">
                        <label htmlFor="follower">Follower : </label> {data?.followers}
                    </div>
                    <div className="info text-white  font-medium text">
                        <label htmlFor="following ">Following : </label> {data?.following}
                    </div>
                    <div className="info text-white  font-medium text">
                        <label htmlFor="location">Location : </label> {data?.location}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Github;

export const githubFetchData = async () : Promise<any> => {
    const response:any = await fetch("https://api.github.com/users/AryanTapre");
    return response.json();
}