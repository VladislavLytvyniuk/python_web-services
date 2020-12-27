  function button1 (but1){
         var a1, a2, aResult, aResultMinusOne ;
         //Собираю полученные данные с первой, второй кнопок и делаю мат. вычисления и перевожу в формат double (Float)
         a1 = document.getElementById('a1InputForFirstButton').value;
         a1 = parseFloat (a1);

         a2 = document.getElementById('a2InputForFirstButton').value;
         a2 = parseFloat (a2);

         aResultMinusOne = parseFloat (aResultMinusOne);

         aResult = a1 / (a1 + a2);
         aResultMinusOne = 1 - aResult;

  var patt = /[0-9]/;
     if(!patt.test(a1) && !patt.test(a2)){

      alert('Что бы расчитать заполните строку a1 и a2 !')
      $('*#eror1').html('Вы не заполнили строку a1 и a2 !');  //Очищает верный ответ в прошлом просчете
      $('*.answer1').html('');  //Очищает верный ответ в прошлом просчете
      $('*.pole1').css('background-color','#FFFFFF');
      $('*.pole1').css('border-color','red');

       console.log(a1,a2, aResult, aResultMinusOne);
       }

     else  if(!patt.test(a1)){

              alert('Что бы расчитать заполните строку a1 !')
         $('*#eror1').html('Вы не заполнили строку a1!');  //Очищает верный ответ в прошлом просчете
         $('*.answer1').html('');  //Очищает верный ответ в прошлом просчете
         $('*#a1InputForFirstButton').css('background-color','#FFFFFF');
         $('*#a1InputForFirstButton').css('border-color','red');

               console.log(a1,a2, aResult, aResultMinusOne);
         }
      else   if(!patt.test(a2)){
        alert('Что бы расчитать заполните строку a2 !')
   $('*#eror1').html('Вы не заполнили строку a2!');  //Очищает верный ответ в прошлом просчете
   $('*.answer1').html('');  //Очищает верный ответ в прошлом просчете
   $('*#a2InputForFirstButton').css('background-color','#FFFFFF');
   $('*#a2InputForFirstButton').css('border-color','red');

         console.log(a1,a2, aResult, aResultMinusOne);
           }

       else {

   $('*#aResultTextForFirstButton').html('a  ≈ ' + (aResult).toFixed(3));
   $('*#aResultMinusOneTextForFirstButton').html('1 - a  ≈ 1 - ' + (aResult).toFixed(3) + '  ≈ ' + (aResultMinusOne).toFixed(3));
   $('*#eror1').html('');  //Очищает верный ответ в прошлом просчете

                $('*.pole1').css('background-color','#282C34');
                $('*.pole1').css('color','#E8EAFC');
                $('*.pole1').css('border-color','#EAEEF0');
                $('*.pole1').css('text-align','center');
                $('*.pole1').css('font-size','15px');

                 console.log(a1,a2, aResult, aResultMinusOne);
         }
         var arr = [aResult, aResultMinusOne]; // Создаю массив для передачи переменных в следующие формулы
         return arr;
    }

  function button2(){

        arr = button1 ();  // Вызываю массив для этой функции
        var Ek, El, x, k, l;

              x = document.getElementById('xInputForSecondButton').value; //збираю дані з input
              x = parseFloat (x); //Перевожу в формат double (Float)

              k = document.getElementById('kInputForSecondButton').value;
              k = parseFloat (k); //Перевожу в формат double (Float)

              l = document.getElementById('lInputForSecondButton').value;
              l = parseFloat (l);

              Ek = x / k;
              El = x / l;

        var pattss = /[0-9]/;

        if(!pattss.test(x) && !pattss.test(k) && !pattss.test(l)){

         alert('Что бы расчитать заполните строки X, K и L !');
               $('*#eror2').html('Что бы расчитать заполните строки X, K и L !');
                    $('*.answer2').html('');  //Очищает верный ответ в прошлом просчете
                         $('*.pole2').css('border-color','red');
                           console.log(x, k, l);
          }
        // else if (a2 == reg){
        else  if(!pattss.test(x)){
          alert('Что бы расчитать заполните строку X !');
                $('*#eror2').html('Вы не заполнили строку X !');
                     $('*.answer2').html('');  //Очищает верный ответ в прошлом просчете
                          $('*xInputForSecondButton').css('border-color','red');
                           console.log(x, k, l);

            }
            else  if(!pattss.test(k)){

              alert('Что бы расчитать заполните строку K !');
                    $('*#eror2').html('Вы не заполнили строку K !');
                         $('*.answer2').html('');  //Очищает верный ответ в прошлом просчете
                              $('*#kInputForSecondButton').css('border-color','red');
                                  console.log(x, k, l);
                }

                else  if(!pattss.test(l)){

                    alert('Что бы расчитать заполните строку L !');
                          $('*#eror2').html('Вы не заполнили строку L !');
                               $('*.answer2').html('');  //Очищает верный ответ в прошлом просчете
                                    $('*#lInputForSecondButton').css('border-color','red');
                                        console.log(x, k, l);
  }
                           else  if(x <= 0 && k <= 0 && l <= 0 ){ //Верный ответ

                             $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
                             $('*#ElAnswerSecondButton').html(' Ek = X / L  ≈ ' + (El).toFixed(3));
                             $('*#eror2').html('');  //Очищает верный ответ в прошлом просчете

                           $('*#eAnswerThirdButtom').html('E = Ek^a * El^(a-1) ≈ ');
                           $('*#mAnswerFourthButtom').html('M = K^a * L^(a-1) ≈ ');

                                          $('*.pole2').css('background-color','#282C34');
                                          $('*.pole2').css('color','#E8EAFC');
                                          $('*.pole2').css('border-color','#EAEEF0');
                                          $('*.pole2').css('text-align','center');
                                          $('*.pole2').css('font-size','15px');
                                                 console.log(x, k, l);
                    }
                    else  if(x <= 0 && k <= 0){

                      $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
                      $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));
                      $('*.eror3').html("'EK' должен быть больше нуля !<br/><br/> E = Ek^a * El^(a-1)");
                      $('*.eror4').html("'K' должен быть больше нуля !<br/><br/> M = K^a * L^(a-1)");

                                      console.log(x, k, l);
             }
             else  if(x <= 0 && l <= 0){

               $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
               $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));
                      $('*.eror3').html("'El' должен быть больше нуля !<br/><br/> E = Ek^a * El^(a-1)");
                      $('*.eror4').html("'L' должен быть больше нуля !<br/><br/> M = K^a * L^(a-1)");

                               console.log(x, k, l);

      }
      else  if(k <= 0 && l <= 0){

        $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
        $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));
               $('*.eror2').html("'Ek' и 'El' должен быть больше нуля !<br/><br/> E = Ek^a * El^(a-1)");
               $('*.eror4').html("'K' и 'L' должны быть больше нуля !<br/><br/> M = K^a * L^(a-1)");


                        console.log(x, k, l);
  }
                    else  if(x <= 0 ){

                      $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
                      $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));
                             $('*.eror3').html("'Ek' и 'El' должны быть больше нуля !<br/><br/> E = Ek^a * El^(a-1)");

                                      console.log(x, k, l);
             }
             else  if(k <= 0 ){
               $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
               $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));
               $('*.eror3').html("'Ek' должен быть больше нуля !<br/><br/> E = Ek^a * El^(a-1)");
               $('*.eror4').html("'K' должен быть больше нуля !<br/><br/> M = K^a * L^(a-1)");

                               console.log(x, k, l);
      }
      else  if(l <= 0 ){
        $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
        $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));

               $('*.eror3').html("'El' должен быть больше нуля ! <br/><br/> E = Ek^a * El^(a-1)");
               $('*.eror4').html("'L' должен быть больше нуля ! <br/><br/> M = K^a * L^(a-1)");
                        console.log(x, k, l);

  }
          else {

            $('*#EkAnswerSecondButton').html(' Ek = X / K  ≈ ' + (Ek).toFixed(3));
            $('*#ElAnswerSecondButton').html(' El = X / L  ≈ ' + (El).toFixed(3));
            $('*#eror2').html('');  //Очищает верный ответ в прошлом просчете

                         $('*.pole2').css('background-color','#282C34');
                         $('*.pole2').css('color','#E8EAFC');
                         $('*.pole2').css('border-color','#EAEEF0');
                         $('*.pole2').css('text-align','center');
                         $('*.pole2').css('font-size','15px');
                                console.log(x, k, l);
            }

        arr.push (Ek, El, k, l); //Ek, El - for button3; k, l - for button4
        return arr;
  }

  function button3 (){
                arr = button2 ();
            var E = (Math.pow(arr [2] , arr [0])) * (Math.pow(arr [3] , arr [1]));

                  document.getElementById('eAnswerThirdButtom').innerHTML =
                     'E = Ek^a * El^(a-1)  ≈ '+ E.toFixed(3);
                     // Собираю полученные данные с первой, второй кнопок и делаю мат. вычисления



      return arr;
  }

  function button4 (){
                arr = button2 ();
                var M = (Math.pow(arr [4] , arr [0])) * (Math.pow(arr [5] , arr [1]));
     document.getElementById('mAnswerFourthButtom').innerHTML =
      'M = K^a * L^(a-1)   ≈ '+ (M).toFixed(3);
        // Собираю полученные данные с первой, второй кнопок и делаю мат. вычисления
       return arr;
  }
