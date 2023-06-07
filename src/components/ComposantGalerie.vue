

<script setup>


let colors =["#00AEEF" , "#ED028C"  , "#FFF101" ,  "#2E3092"   ,"#EE1D23" ,  "#00A54F" , "#363539", "#231F20" , "#5A449C" ]


function applyColor(){
    $('#nav a').each(function(index, element) {
    $(element).style.backgroundColor = colors[index]
});
}

</script>
<template>


</template>
