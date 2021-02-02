//上传音频
$("#fileInput").change(function(){
    var file = $("#fileInput").get(0).files;
    console.log(file.type);
    for(var i = 0;i<file.length;i++){
        var path = URL.createObjectURL(file[i]);
        var audio = document.createElement('audio');
        audio.src = path;
        audio.controls = true;
        audio.volume = '0.2';
        $('#audio1').append(audio);
    }
});

$("#upload").click(function(){
    var file = $("#fileInput").get(0).files;
    var formData = new FormData();
    for(var i = 0;i<file.length;i++){
        formData.append("recording",file[i]);
    }
    console.log(formData.getAll("recording"));
    //ajax上传至后台
    uploadAudio(formData);
});
}
})
}
})
