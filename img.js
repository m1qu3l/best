(()=>{
    fetch("img.json")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res =>{
        res.img.forEach((e, key)=> {
            document.querySelectorAll("img")[key].src = e.src
        });
    })
    .catch(err =>{
        console.log(err)
    })
    .finally(()=>{
        setTimeout(()=>{
            document.querySelector(".carga").classList.add("carga_activo")
        }, 2500)
    })
})();

(()=>{
    const obser = new IntersectionObserver((entradas, s)=>{
        entradas.forEach(e =>{
            e.isIntersecting ? e.target.classList.add("c_img_all") : false;
        })
    }, {
        rootMargin : "-70px",
        thresholds : .8
    })
    document.querySelectorAll(".c img").forEach(e =>{
        obser.observe(e)
    })
})();
