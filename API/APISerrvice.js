import axios from "axios";


export const PostFeel = async (student) =>{
    await axios({
        method: 'post',
        url: 'http://192.168.0.91:19001/api/students',
        data: {
            "name": student.name,
            "feeling": student.feeling,
            "workYesterday": student.workYesterday,
            "workDay": student.workToday,
            "observation":student.Observation,
            "dateFeel": "2022-03-10T13:36:31.309Z"
        }
    });
}

export const getFeel =()=>{
    axios.get('http://127.0.0.1:8000/api/students')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
