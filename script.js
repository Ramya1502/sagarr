/* ===================================================== 
   SCREEN 1 
===================================================== */ 
 
function openWebsite() { 
 
    document.body.style.transition = "opacity .8s ease"; 
    document.body.style.opacity = "0"; 
 
    setTimeout(function () { 
 
        window.location.href = "page2.html"; 
 
    }, 800); 
 
} 
 
 
 
/* ===================================================== 
   SCREEN 2 → MEMORIES 
===================================================== */ 
 
function goToMemories() { 
 
    document.body.classList.add("page-exit"); 
 
    setTimeout(function () { 
 
        window.location.href = "memories.html"; 
 
    }, 900); 
 
} 
 
 
 
/* ===================================================== 
   MEMORIES 
===================================================== */ 
 
const memories = [ 
 
    { 
        image: "photo1.jpg", 
        text: "Some moments are ordinary... until you remember them." 
    }, 
 
    { 
        image: "photo2.jpg", 
        text: "A little moment I somehow never forgot." 
    }, 
 
    { 
        image: "photo3.jpg", 
        text: "Somehow, you looked a little more handsome that day." 
    }, 
 
    { 
        image: "photo4.jpg", 
        text: "Shalini was looking extra cute 😂" 
    }, 
 
    { 
        image: "photo5.jpg", 
        text: "A small moment, but worth keeping." 
    }, 
 
    { 
        image: "photo6.jpg", 
        text: "You probably don't know how memorable this was." 
    }, 
 
    { 
        image: "photo7.jpg", 
        text: "Just a moment... that stayed." 
    }, 
 
    { 
        image: "photo8.jpg", 
        text: "Another little memory I didn't want to leave behind." 
    }, 
 
    { 
        image: "photo9.jpg", 
        text: "Funny how certain moments never really leave." 
    }, 
 
    { 
        image: "photo10.jpg", 
        text: "Some days just feel a little more special. This was one of them. ♡" 
    }, 
 
    { 
        image: "photo11.jpg", 
        text: "Somehow, you made that day a little happier for me. ♡" 
    }, 
 
    { 
        image: "photo12.jpg", 
        text: "You were this cute even back then. ♡" 
    } 
 
]; 
 
 
let currentMemory = 0; 
 
 
 
function initMemories() { 
 
    const memoryCard = 
        document.getElementById("memoryCard"); 
 
    const memoryImage = 
        document.getElementById("memoryImage"); 
 
    const memoryText = 
        document.getElementById("memoryText"); 
 
    const memoryNumber = 
        document.getElementById("memoryNumber"); 
 
    const currentNumber = 
        document.getElementById("currentNumber"); 
 
 
    if (!memoryCard || !memoryImage) { 
        return; 
    } 
 
 
    function showMemory() { 
 
        memoryCard.classList.remove( 
            "memory-changing" 
        ); 
 
        void memoryCard.offsetWidth; 
 
        memoryCard.classList.add( 
            "memory-changing" 
        ); 
 
 
        memoryImage.src = 
            memories[currentMemory].image; 
 
 
        if (memoryText) { 
 
            memoryText.textContent = 
                memories[currentMemory].text; 
 
        } 
 
 
        if (memoryNumber) { 
 
            memoryNumber.textContent = 
                String(currentMemory + 1) 
                .padStart(2, "0"); 
 
        } 
 
 
        if (currentNumber) { 
 
            currentNumber.textContent = 
                String(currentMemory + 1) 
                .padStart(2, "0"); 
 
        } 
 
    } 
 
 
    showMemory(); 
 
 
    memoryCard.addEventListener( 
        "click", 
        function () { 
 
            currentMemory++; 
 
            if ( 
                currentMemory >= 
                memories.length 
            ) { 
 
                currentMemory = 0; 
 
            } 
 
            showMemory(); 
 
        } 
    ); 
 
} 
 
 
 
/* ===================================================== 
   PAGE NAVIGATION 
===================================================== */ 
 
function goToWishes() { 
 
    document.body.style.transition = 
        "opacity .7s ease"; 
 
    document.body.style.opacity = "0"; 
 
 
    setTimeout(function () { 
 
        window.location.href = 
            "things.html"; 
 
    }, 700); 
 
} 
 
 
 
 
 
 
function goToSuspense() { 
 
    document.body.style.transition = 
        "opacity .8s ease"; 
 
    document.body.style.opacity = "0"; 
 
 
    setTimeout(function () { 
 
        window.location.href = 
            "suspense.html"; 
 
    }, 800); 
 
} 
 
 
 
function goToCake() { 
 
    document.body.style.transition = 
        "opacity .8s ease"; 
 
    document.body.style.opacity = "0"; 
 
 
    setTimeout(function () { 
 
        window.location.href = 
            "cake.html"; 
 
    }, 800); 
 
} 
 
 
 
function goToFinal() { 
 
    document.body.style.transition = 
        "opacity .8s ease"; 
 
    document.body.style.opacity = "0"; 
 
 
    setTimeout(function () { 
 
        window.location.href = 
            "final.html"; 
 
    }, 800); 
 
} 
 
 
 
/* ===================================================== 
   SONG 
===================================================== */ 
 
function playSong() { 
 
    const song = 
        document.getElementById( 
            "birthdaySong" 
        ); 
 
    const button = 
        document.querySelector( 
            ".play-button" 
        ); 
 
    const icon = 
        document.getElementById( 
            "playIcon" 
        ); 
 
    const status = 
        document.getElementById( 
            "songStatus" 
        ); 
 
 
    if (!song) { 
        return; 
    } 
 
 
    if (song.paused) { 
 
        const playPromise = 
            song.play(); 
 
 
        if ( 
            playPromise !== undefined 
        ) { 
 
            playPromise 
                .then(function () { 
 
                    if (button) { 
 
                        button.classList.add( 
                            "playing" 
                        ); 
 
                    } 
 
 
                    if (icon) { 
 
                        icon.textContent = 
                            "Ⅱ"; 
 
                    } 
 
 
                    if (status) { 
 
                        status.textContent = 
                            "playing... ♡"; 
 
                    } 
 
                }) 
                .catch(function () { 
 
                    if (status) { 
 
                        status.textContent = 
                            "tap again to play"; 
 
                    } 
 
                }); 
 
        } 
 
    } 
 
    else { 
 
        song.pause(); 
 
 
        if (button) { 
 
            button.classList.remove( 
                "playing" 
            ); 
 
        } 
 
 
        if (icon) { 
 
            icon.textContent = 
                "▶"; 
 
        } 
 
 
        if (status) { 
 
            status.textContent = 
                "paused"; 
 
        } 
 
    } 
 
} 
 
 
 
/* ===================================================== 
   SONG ENDED 
===================================================== */ 
 
function initSongEnded() { 
 
    const birthdaySong = 
        document.getElementById( 
            "birthdaySong" 
        ); 
 
 
    if (!birthdaySong) { 
        return; 
    } 
 
 
    birthdaySong.addEventListener( 
        "ended", 
        function () { 
 
            const button = 
                document.querySelector( 
                    ".play-button" 
                ); 
 
            const icon = 
                document.getElementById( 
                    "playIcon" 
                ); 
 
            const status = 
                document.getElementById( 
                    "songStatus" 
                ); 
 
 
            if (button) { 
 
                button.classList.remove( 
                    "playing" 
                ); 
 
            } 
 
 
            if (icon) { 
 
                icon.textContent = 
                    "▶"; 
 
            } 
 
 
            if (status) { 
 
                status.textContent = 
                    "tap to play again ♡"; 
 
            } 
 
        } 
    ); 
 
} 
 
 
 
/* ===================================================== 
   CAKE PAGE 
===================================================== */ 
 
function initCake() { 
 
    const instructionText = 
        document.getElementById( 
            "instructionText" 
        ); 
 
    const candle = 
        document.querySelector( 
            ".candle" 
        ); 
 
    const fireElements = 
        document.querySelectorAll( 
            ".fire" 
        ); 
 
    const cake = 
        document.getElementById( 
            "cake" 
        ); 
 
    const cakeWrap = 
        document.querySelector( 
            ".cake-wrap" 
        ); 
 
    const lastButton = 
        document.getElementById( 
            "lastButton" 
        ); 
 
 
    /* If this isn't cake page, stop */ 
 
    if ( 
        !instructionText && 
        !candle && 
        !cake 
    ) { 
 
        return; 
 
    } 
 
 
    let candleBlown = false; 
    let cakeCut = false; 
 
 
    if (instructionText) { 
 
        instructionText.textContent = 
            "make a wish"; 
 
    } 
 
 
    const flameTimer = 
        setTimeout(function () { 
 
            if ( 
                !candleBlown && 
                instructionText 
            ) { 
 
                instructionText.textContent = 
                    "tap the flame"; 
 
            } 
 
        }, 6500); 
 
 
 
    /* CANDLE */ 
 
    if (candle) { 
 
        candle.addEventListener( 
            "click", 
            function () { 
 
                if (candleBlown) { 
                    return; 
                } 
 
 
                candleBlown = true; 
 
 
                clearTimeout( 
                    flameTimer 
                ); 
 
 
                fireElements.forEach( 
                    function (fire) { 
 
                        fire.style.display = 
                            "none"; 
 
                    } 
                ); 
 
 
                if (instructionText) { 
 
                    instructionText.textContent = 
                        "tap the cake to cut it"; 
 
                } 
 
 
                if ( 
                    typeof confetti === 
                    "function" 
                ) { 
 
                    confetti({ 
 
                        particleCount: 15, 
 
                        spread: 30, 
 
                        startVelocity: 8, 
 
                        origin: { 
                            x: 0.5, 
                            y: 0.45 
                        }, 
 
                        colors: [ 
                            "#ffffff", 
                            "#D4AF37" 
                        ] 
 
                    }); 
 
                } 
 
            } 
        ); 
 
    } 
 
 
 
    /* CAKE */ 
 
    if (cake && cakeWrap) { 
 
        cake.addEventListener( 
            "click", 
            function () { 
 
                if (!candleBlown) { 
                    return; 
                } 
 
 
                if (cakeCut) { 
                    return; 
                } 
 
 
                cakeCut = true; 
 
 
                const slice = 
                    cake.cloneNode(true); 
 
 
                slice.removeAttribute( 
                    "id" 
                ); 
 
 
                slice.classList.add( 
                    "cake-slice" 
                ); 
 
 
                cakeWrap.appendChild( 
                    slice 
                ); 
 
 
                setTimeout( 
                    function () { 
 
                        slice.classList.add( 
                            "cut" 
                        ); 
 
                    }, 
                    50 
                ); 
 
 
                if (instructionText) { 
 
                    instructionText.textContent = 
                        "one little piece, just for you."; 
 
                } 
 
 
                if ( 
                    typeof confetti === 
                    "function" 
                ) { 
 
                    confetti({ 
 
                        particleCount: 35, 
 
                        spread: 55, 
 
                        startVelocity: 18, 
 
                        origin: { 
                            x: 0.7, 
                            y: 0.55 
                        }, 
 
                        colors: [ 
                            "#ffffff", 
                            "#D4AF37", 
                            "#F5F5DC" 
                        ] 
 
                    }); 
 
                } 
 
 
                setTimeout( 
                    function () { 
 
                        if (lastButton) { 
 
                            lastButton.classList.add( 
                                "show" 
                            ); 
 
                        } 
 
                    }, 
                    1800 
                ); 
 
            } 
        ); 
 
    } 
 
 
 
    /* LAST BUTTON */ 
 
    if (lastButton) { 
 
        lastButton.addEventListener( 
            "click", 
            function () { 
 
                document.body.style.transition = 
                    "opacity .8s ease"; 
 
                document.body.style.opacity = 
                    "0"; 
 
 
                setTimeout( 
                    function () { 
 
                        window.location.href = 
                            "final.html"; 
 
                    }, 
                    800 
                ); 
 
            } 
        ); 
 
    } 
 
 
 
    /* MAGIC CURSOR */ 
 
    const canvas = 
        document.getElementById( 
            "magicCursor" 
        ); 
 
 
    if (!canvas) { 
        return; 
    } 
 
 
    const ctx = 
        canvas.getContext("2d"); 
 
 
    function resizeCanvas() { 
 
        canvas.width = 
            window.innerWidth; 
 
        canvas.height = 
            window.innerHeight; 
 
    } 
 
 
    resizeCanvas(); 
 
 
    window.addEventListener( 
        "resize", 
        resizeCanvas 
    ); 
 
 
    let particlesArray = []; 
 
 
    const mouse = { 
        x: null, 
        y: null 
    }; 
 
 
    window.addEventListener( 
        "mousemove", 
        function (event) { 
 
            mouse.x = 
                event.clientX; 
 
            mouse.y = 
                event.clientY; 
 
 
            if ( 
                Math.random() > 0.3 
            ) { 
 
                particlesArray.push( 
                    new CakeParticle() 
                ); 
 
            } 
 
        } 
    ); 
 
 
    window.addEventListener( 
        "touchmove", 
        function (event) { 
 
            if ( 
                !event.touches || 
                !event.touches.length 
            ) { 
 
                return; 
 
            } 
 
 
            mouse.x = 
                event.touches[0].clientX; 
 
            mouse.y = 
                event.touches[0].clientY; 
 
 
            if ( 
                Math.random() > 0.4 
            ) { 
 
                particlesArray.push( 
                    new CakeParticle() 
                ); 
 
            } 
 
        }, 
        { 
            passive: true 
        } 
    ); 
 
 
 
    class CakeParticle { 
 
        constructor() { 
 
            this.x = mouse.x; 
            this.y = mouse.y; 
 
            this.size = 
                Math.random() * 2 + 1.5; 
 
            this.speedX = 
                Math.random() * 1 - 0.5; 
 
            this.speedY = 
                Math.random() * 1 - 0.5; 
 
 
            const colors = [ 
 
                "rgba(255,255,255,.8)", 
 
                "rgba(255,223,0,.6)", 
 
                "rgba(255,250,205,.7)" 
 
            ]; 
 
 
            this.color = 
                colors[ 
                    Math.floor( 
                        Math.random() * 
                        colors.length 
                    ) 
                ]; 
 
 
            this.life = 100; 
 
        } 
 
 
        update() { 
 
            this.x += 
                this.speedX; 
 
            this.y += 
                this.speedY; 
 
            this.life -= 3; 
 
 
            if ( 
                this.size > 0.05 
            ) { 
 
                this.size -= 0.05; 
 
            } 
 
        } 
 
 
        draw() { 
 
            ctx.fillStyle = 
                this.color; 
 
 
            ctx.beginPath(); 
 
 
            ctx.arc( 
 
                this.x, 
                this.y, 
                this.size, 
                0, 
                Math.PI * 2 
 
            ); 
 
 
            ctx.fill(); 
 
        } 
 
    } 
 
 
 
    function handleCakeParticles() { 
 
        for ( 
            let i = 0; 
            i < particlesArray.length; 
            i++ 
        ) { 
 
            particlesArray[i].update(); 
 
            particlesArray[i].draw(); 
 
 
            if ( 
                particlesArray[i].life <= 0 || 
                particlesArray[i].size <= 0.1 
            ) { 
 
                particlesArray.splice( 
                    i, 
                    1 
                ); 
 
                i--; 
 
            } 
 
        } 
 
    } 
 
 
 
    function animateCakeParticles() { 
 
        ctx.clearRect( 
 
            0, 
            0, 
            canvas.width, 
            canvas.height 
 
        ); 
 
 
        handleCakeParticles(); 
 
 
        requestAnimationFrame( 
            animateCakeParticles 
        ); 
 
    } 
 
 
    animateCakeParticles(); 
 
} 
 
 
 
/* ===================================================== 
   CHOOSE YOUR GIFT 
===================================================== */ 
 
let selectedBouquet = null; 
 
 
 
/* ===================================================== 
   OPEN GIFT 
===================================================== */ 
 
function openGift(type) { 
 
    console.log( 
        "Gift clicked:", 
        type 
    ); 
 
 
    /* ================================= 
       LETTER 
    ================================= */ 
 
    if (type === "letter") { 
 
        const popup = 
            document.getElementById( 
                "giftPopup" 
            ); 
 
 
        if (!popup) { 
 
            console.error( 
                "giftPopup not found" 
            ); 
 
            return; 
 
        } 
 
 
        popup.classList.add( 
            "show" 
        ); 
 
 
        const note = 
            document.getElementById( 
                "sealedNote" 
            ); 
 
        const instruction = 
            document.getElementById( 
                "letterInstruction" 
            ); 
 
        const letter = 
            document.getElementById( 
                "letterContent" 
            ); 
 
 
        if (note) { 
 
            note.classList.remove( 
                "open" 
            ); 
 
        } 
 
 
        if (letter) { 
 
            letter.classList.remove( 
                "show" 
            ); 
 
        } 
 
 
        if (instruction) { 
 
            instruction.style.opacity = 
                "1"; 
 
            instruction.textContent = 
                "tap to open ♡"; 
 
        } 
 
 
        return; 
 
    } 
 
 
 
    /* ================================= 
       BOUQUET 
    ================================= */ 
 
    if (type === "bouquet") { 
 
        openBouquet(); 
 
        return; 
 
    } 
 
 
 
    /* ================================= 
       MYSTERY 
    ================================= */ 
 
    if (type === "box") { 
 
        openMysteryBox(); 
 
        return; 
 
    } 
 
} 
 
 
 
/* ===================================================== 
   LETTER 
===================================================== */ 
 
function openLetter() { 
 
    const note = 
        document.getElementById( 
            "sealedNote" 
        ); 
 
    const instruction = 
        document.getElementById( 
            "letterInstruction" 
        ); 
 
    const letter = 
        document.getElementById( 
            "letterContent" 
        ); 
 
 
    if (!note || !letter) { 
 
        console.error( 
            "Letter elements missing" 
        ); 
 
        return; 
 
    } 
 
 
    if ( 
        note.classList.contains( 
            "open" 
        ) 
    ) { 
 
        return; 
 
    } 
 
 
    note.classList.add( 
        "open" 
    ); 
 
 
    if (instruction) { 
 
        instruction.style.opacity = 
            "0"; 
 
    } 
 
 
    setTimeout( 
        function () { 
 
            letter.classList.add( 
                "show" 
            ); 
 
        }, 
        650 
    ); 
 
} 
 
 
 
function closeGift() { 
 
    const popup = 
        document.getElementById( 
            "giftPopup" 
        ); 
 
 
    if (!popup) { 
        return; 
    } 
 
 
    popup.classList.remove( 
        "show" 
    ); 
 
 
    const note = 
        document.getElementById( 
            "sealedNote" 
        ); 
 
    const letter = 
        document.getElementById( 
            "letterContent" 
        ); 
 
    const instruction = 
        document.getElementById( 
            "letterInstruction" 
        ); 
 
 
    if (note) { 
 
        note.classList.remove( 
            "open" 
        ); 
 
    } 
 
 
    if (letter) { 
 
        letter.classList.remove( 
            "show" 
        ); 
 
    } 
 
 
    if (instruction) { 
 
        instruction.style.opacity = 
            "1"; 
 
        instruction.textContent = 
            "tap to open ♡"; 
 
    } 
 
} 
 
 
 
/* ===================================================== 
   BOUQUET 
===================================================== */ 
 
function openBouquet() { 
 
    const popup = 
        document.getElementById( 
            "bouquetPopup" 
        ); 
 
 
    if (!popup) { 
 
        console.error( 
            "bouquetPopup not found" 
        ); 
 
        return; 
 
    } 
 
 
    popup.classList.add( 
        "show" 
    ); 
 
 
    selectedBouquet = null; 
 
 
    const final = 
        document.getElementById( 
            "bouquetFinal" 
        ); 
 
    const next = 
        document.getElementById( 
            "bouquetNext" 
        ); 
 
 
    if (final) { 
 
        final.classList.remove( 
            "show" 
        ); 
 
    } 
 
 
    if (next) { 
 
        next.classList.remove( 
            "ready" 
        ); 
 
    } 
 
 
    document 
        .querySelectorAll( 
            ".bouquet-card" 
        ) 
        .forEach( 
            function (card) { 
 
                card.classList.remove( 
                    "selected" 
                ); 
 
            } 
        ); 
 
} 
 
 
 
function selectBouquet( 
    type, 
    card 
) { 
 
    selectedBouquet = 
        type; 
 
 
    document 
        .querySelectorAll( 
            ".bouquet-card" 
        ) 
        .forEach( 
            function (item) { 
 
                item.classList.remove( 
                    "selected" 
                ); 
 
            } 
        ); 
 
 
    if (card) { 
 
        card.classList.add( 
            "selected" 
        ); 
 
    } 
 
 
    const next = 
        document.getElementById( 
            "bouquetNext" 
        ); 
 
 
    if (next) { 
 
        next.classList.add( 
            "ready" 
        ); 
 
    } 
 
} 
 
 
 
function showSelectedBouquet() { 
 
    if (!selectedBouquet) { 
 
        return; 
 
    } 
 
 
    const final = 
        document.getElementById( 
            "bouquetFinal" 
        ); 
 
    const image = 
        document.getElementById( 
            "finalBouquetImage" 
        ); 
 
 
    if (!final || !image) { 
 
        return; 
 
    } 
 
 
    let file = ""; 
 
 
    if ( 
        selectedBouquet === 
        "rose" 
    ) { 
 
        file = 
            "rose-bouquet.png"; 
 
    } 
 
 
    if ( 
        selectedBouquet === 
        "pink" 
    ) { 
 
        file = 
            "pink-bouquet.png"; 
 
    } 
 
 
    if ( 
        selectedBouquet === 
        "sunflower" 
    ) { 
 
        file = 
            "sunflower-bouquet.png"; 
 
    } 
 
 
    image.src = 
        file; 
 
 
    final.classList.add( 
        "show" 
    ); 
 
} 
 
 
 
function closeBouquet() { 
 
    const popup = 
        document.getElementById( 
            "bouquetPopup" 
        ); 
 
 
    if (!popup) { 
        return; 
    } 
 
 
    popup.classList.remove( 
        "show" 
    ); 
 
 
    selectedBouquet = 
        null; 
 
} 
 
 
 
/* ===================================================== 
   MYSTERY GIFT 
===================================================== */ 
 
function openMysteryBox() { 
 
    const popup = 
        document.getElementById( 
            "mysteryPopup" 
        ); 
 
    const closed = 
        document.getElementById( 
            "mysteryClosed" 
        ); 
 
    const inside = 
        document.getElementById( 
            "mysteryInside" 
        ); 
 
    const bottom = 
        document.getElementById( 
            "mysteryBottomText" 
        ); 
 
 
    if (!popup) { 
 
        console.error( 
            "mysteryPopup not found" 
        ); 
 
        return; 
 
    } 
 
 
    popup.classList.add( 
        "show" 
    ); 
 
 
    if (closed) { 
 
        closed.classList.remove( 
            "hide" 
        ); 
 
    } 
 
 
    if (inside) { 
 
        inside.classList.remove( 
            "show" 
        ); 
 
    } 
 
 
    if (bottom) { 
 
        bottom.textContent = 
            "tap to open ♡"; 
 
    } 
 
} 
 
 
 
/* ===================================================== 
   OPEN MYSTERY CONTENT 
===================================================== */ 
 
function openMysteryBoxContent() { 
 
    const closed = 
        document.getElementById( 
            "mysteryClosed" 
        ); 
 
    const inside = 
        document.getElementById( 
            "mysteryInside" 
        ); 
 
    const bottom = 
        document.getElementById( 
            "mysteryBottomText" 
        ); 
 
 
    if (!closed || !inside) { 
 
        console.error( 
            "Mystery content elements missing" 
        ); 
 
        return; 
 
    } 
 
 
    closed.classList.add( 
        "hide" 
    ); 
 
 
    setTimeout( 
        function () { 
 
            inside.classList.add( 
                "show" 
            ); 
 
 
            if (bottom) { 
 
                bottom.textContent = 
                    "a little memory ♡"; 
 
            } 
 
        }, 
        450 
    ); 
 
} 
 
 
 
/* ===================================================== 
   CLOSE MYSTERY 
===================================================== */ 
 
function closeMysteryBox() { 
 
    const popup = 
        document.getElementById( 
            "mysteryPopup" 
        ); 
 
    const closed = 
        document.getElementById( 
            "mysteryClosed" 
        ); 
 
    const inside = 
        document.getElementById( 
            "mysteryInside" 
        ); 
 
 
    if (popup) { 
 
        popup.classList.remove( 
            "show" 
        ); 
 
    } 
 
 
    if (closed) { 
 
        closed.classList.remove( 
            "hide" 
        ); 
 
    } 
 
 
    if (inside) { 
 
        inside.classList.remove( 
            "show" 
        ); 
 
    } 
 
} 
 
 
 
/* ===================================================== 
   PAGE INITIALIZATION 
===================================================== */ 
 
document.addEventListener( 
    "DOMContentLoaded", 
    function () { 
 
        console.log( 
            "SCRIPT LOADED SUCCESSFULLY" 
        ); 
 
 
        initMemories(); 
 
        initSongEnded(); 
 
        initCake(); 
 
    } 
); 
 
function goToSong() { 
 
    document.body.style.transition = "opacity .8s ease"; 
    document.body.style.opacity = "0"; 
 
    setTimeout(() => { 
        window.location.href = "song.html"; 
    }, 800); 
 
}   