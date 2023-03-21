$(document).ready(()=>{
    const $wolf = $('.wolf'); 
    const $sheep= $('.sheep'); 
    const $peasant= $('.peasant'); 
    const $boat = $('.boat');
    const $cabbage = $('.cabbage');

    var left = false; 

    const boatMove = ()=>{
        $boat.click(()=>{
            
            if($boat.hasClass('boat click')){ 
                const move = ()=>{
                    var deferred = $.Deferred();

                    $boat.animate({
                        left: '300px'
                    },
                    500,
                    ()=>deferred.resolve())

                    $peasant.animate({
                        left: '410px'
                    },
                    500,
                    ()=>deferred.resolve())

                    return deferred.promise();

                    
                }

                move();
            }

        })

    }


    const moveRight = (person, classPerson)=>{
        var deferred = $.Deferred();
        person.click(()=>{
            if(person.hasClass(classPerson + ' click' )){ 
            const oneSlede = () =>{
                var deferred = $.Deferred();

                    person.animate({
                        bottom: '70px',
                        left: '700px'
                    },
                    500,
                    ()=>deferred.resolve())

                    return deferred.promise();
        }

            const twoSlide = () =>{
                var deferred = $.Deferred();

                $boat.animate({
                    left: '300px'
                },
                1000,
                ()=>deferred.resolve())

                $peasant.animate({
                    left: '410px'
                },
                1000,
                ()=>deferred.resolve())

                person.animate({
                    left: '300px'
                },
                1000,
                ()=>deferred.resolve())

                return deferred.promise();
            }

            const endSlide = () =>{
                var deferred = $.Deferred();

                person.animate({
                    left: 20 + 1 + Math.floor(Math.random() * 200) + 'px',
                    bottom: 1 + Math.floor(Math.random() * 100) + 'px'
                },
                1000,
                ()=>deferred.resolve())

                return deferred.promise();
            }

            oneSlede()
                .done(()=>{
                    twoSlide()
                        .done(()=>{
                            endSlide()
                                .done(()=>{
                                    person.removeClass('click')
                                    $boat.removeClass('click')
                                })
                        })
                })

            }
            // return deferred.promise();
        })
    }

    const moveLeft = (person)=>{
        var deferred = $.Deferred();


        person.click(()=>{
            if(!person.hasClass('click')){
            const oneSlide = ()=>{
                // var deferred = $.Deferred();
                person.animate({
                    bottom: '70px',
                    left: '330px'
                },
                500,
                ()=>deferred.resolve())

                return deferred.promise();
            }
            const twoSlide = ()=>{
                var deferred = $.Deferred();

                $boat.animate({
                    left: '700px'
                },
                1000,
                ()=>deferred.resolve())

                $peasant.animate({
                    left: '750px'
                },
                1000,
                ()=>deferred.resolve())

                person.animate({
                    left: '700px'
                },
                1000,
                ()=>deferred.resolve())

                return deferred.promise();
            }

            const endSlide = () =>{
                var deferred = $.Deferred();

                person.animate({
                    left: 900 + 1 + Math.floor(Math.random() * 200) + 'px',
                    bottom: 1 + Math.floor(Math.random() * 100) + 'px'
                },
                1000,
                ()=>deferred.resolve())

                return deferred.promise();
            }
            oneSlide()
                .done(()=>{
                    twoSlide()
                        .done(()=>{
                            endSlide()
                            .done(()=>{
                                person.addClass('click');
                                $boat.addClass('click');
                            })
                        })
                })

            }
        })
        

        return deferred.promise();
    }

    boatMove()
    
    moveLeft($sheep)
    moveRight($sheep, 'sheep')
    moveLeft($cabbage)
    moveRight($cabbage, 'cabbage')
    moveLeft($wolf)
    moveRight($wolf, 'wolf')
    
    
    
    // if(moveRight($sheep)== true)
    // if(left == false){
    //     moveLeft($sheep);
    // }    
    // else{
    //     moveRight($sheep);
    // }

})