<template>
 <div class="container">
  <!-- <img class="dec" src="../assets/faq/dec1.png" /> -->
  <h2>Часто задаваемые вопросы</h2>
  <div class="qestions">
   <div @click="open('q1')" class="q" :class="{ active: q1 }">
    <p>
     Я зарегистрировался на занятие. Что дальше?<img
      src="../assets/faq/arrow.svg"
     />
    </p>
    <span v-if="q1">
     <h4>
      Чтобы убедиться, что вы готовы к занятию, вам может понадобиться выполнить
      несколько следующих шагов:
     </h4>
     <ol>
      <li>
       1. Проверьте свой электронный почтовый ящик: после регистрации на
       занятие, вы должны были получить электронное письмо с подтверждением.
       Если вы не получили письмо, проверьте папку "Спам" или "Нежелательная
       почта" в вашей почтовой программе.
      </li>

      <li>
       2. Убедитесь, что вы понимаете, как присоединиться к занятию: в
       зависимости от того, какая платформа используется для занятий, вам может
       потребоваться установить специальное программное обеспечение или
       приложение. Убедитесь, что вы зарегистрировались на правильную платформу
       и понимаете, как присоединиться к занятию.
      </li>
      <li>
       3. Подготовьте свои материалы: если на занятие требуется какая-то
       подготовка, убедитесь, что вы ее завершили. Это может включать чтение
       статей, выполнение заданий или подготовку вопросов для обсуждения.
      </li>

      <li>
       4. Подготовьтеся к общению с другими участниками: если на занятие
       предполагается общение с другими участниками, подумайте над тем, как вы
       будете участвовать в дискуссии и какие вопросы вы хотели бы задать.
      </li>

      <li>
       5. Будьте готовы к занятию вовремя: убедитесь, что вы понимаете, когда
       начинается занятие и что у вас достаточно времени, чтобы присоединиться.
       Помните, что лучше подготовиться заранее, чтобы избежать задержек или
       проблем с подключением.
      </li>
     </ol>
    </span>
   </div>
   <div @click="open('q2')" class="q" :class="{ active: q2 }">
    <p>
     Что делать, если я не вижу трансляцию эфира по ссылке из почты?<img
      src="../assets/faq/arrow.svg"
     />
    </p>
    <span v-if="q2">
     <h4>
      Если у вас возникли проблемы с просмотром трансляции эфира по ссылке из
      почты, вам следует предпринять несколько шагов:
     </h4>
     <ol>
      <li>
       1. Проверьте соединение с интернетом: Убедитесь, что у вас стабильное
       подключение к интернету.
      </li>
      <li>
       2. Проверьте правильность ссылки: Перепроверьте ссылку из письма, чтобы
       удостовериться, что она верна. Возможно, она была скопирована или
       вставлена неверно.
      </li>
      <li>
       3. Используйте другой браузер: Попробуйте открыть ссылку в другом
       веб-браузере. Иногда проблемы с отображением могут быть связаны с
       настройками конкретного браузера.
      </li>
      <li>
       4. Отключите блокировщики рекламы и расширения: Временно отключите
       блокировщики рекламы и другие расширения браузера, которые могут
       блокировать загрузку контента.
      </li>
      <li>
       5. Обновите браузер: Убедитесь, что у вас установлена последняя версия
       вашего веб-браузера. Иногда проблемы с отображением могут быть связаны с
       устаревшей версией браузера.
      </li>
     </ol>
    </span>
   </div>
   <div @click="open('q3')" class="q" :class="{ active: q3 }">
    <p>Сколько продлится занятие?<img src="../assets/faq/arrow.svg" /></p>
    <span v-if="q3"
     >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor
     deserunt illum, aspernatur at cupiditate consequuntur! Esse provident
     labore, quam similique voluptatum modi ea? Asperiores modi voluptatum rerum
     eius magnam!</span
    >
   </div>
   <div @click="open('q4')" class="q" :class="{ active: q4 }">
    <p>
     Что делать, если не смогу присутствовать на занятии?<img
      src="../assets/faq/arrow.svg"
     />
    </p>
    <span v-if="q4">
     <h4>
      Если вы не сможете присутствовать на вебинаре, рекомендуется предпринять
      следующие шаги:
     </h4>
     <ol>
      <li>
       1. Уведомите о своем отсутствии: Попробуйте уведомить организаторов
       вебинара заранее, если это возможно. Многие вебинары предоставляют
       возможность заранее сообщить об отсутствии
      </li>
      <li>
       2. Получите материалы: Попросите организаторов предоставить вам запись
       вебинара или предоставить доступ к материалам, представленным во время
       презентации. Это может включать в себя презентации, видеозаписи и другие
       ресурсы.
      </li>
      <li>
       3. Проверьте возможность просмотра записи: Если вебинар записывается,
       уточните, сможете ли вы просмотреть запись после его завершения. Это
       может предоставить вам возможность восстановить утраченную информацию.
      </li>
     </ol>
    </span>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   q1: false,
   q2: false,
   q3: false,
   q4: false,
  };
 },
 methods: {
  open(el) {
   switch (el) {
    case "q1":
     this.q1 = !this.q1;
     break;
    case "q2":
     this.q2 = !this.q2;
     break;
    case "q3":
     this.q3 = !this.q3;
     break;
    case "q4":
     this.q4 = !this.q4;
     break;
   }
  },
 },
};
</script>
<style lang="scss" scoped>
// span {
//  font-size: 20px;
// }

ol {
 li {
  margin-bottom: 20px;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
 }
}

h4 {
 font-family: Manrope;
 font-size: 18px;
 font-weight: 500;
 line-height: 25px;
 letter-spacing: 0em;
 text-align: left;
 margin-bottom: 20px;
}
.dec {
 position: absolute;
 right: 96px;
 top: 72px;
}
.container {
 position: relative;
 padding: 100px;
}
h2 {
 margin-bottom: 80px;
 width: fit-content;
 font-family: Dela Gothic One;
 font-size: 35px;
 font-weight: 400;
 line-height: 42px;
 letter-spacing: 0em;
 text-align: left;
 padding: 12px 20px;
 box-shadow: 8px 8px 0px 0px #292d35;
 border: 2px solid #292d35;
 background-color: #1aef96;
}

.q {
 overflow: hidden;
 border-bottom: 2px solid #292d35;
 margin-bottom: 28px;
 padding-bottom: 28px;

 p {
  cursor: pointer;

  justify-content: space-between;
  margin-bottom: 38px;
  display: flex;
 }

 p:hover {
  color: #fe5101;
 }
}

.q.active {
 p {
  img {
   transform: rotate(180deg);
  }
 }
}

@media screen and (max-width: 400px) {
 .container {
  padding: 60px 16px;
  h2 {
   font-family: Dela Gothic One;
   font-size: 18px;
   font-weight: 400;
   line-height: 22px;
   letter-spacing: 0em;
   text-align: left;
   margin-bottom: 40px;
  }
  .qestions {
   .q:last-child {
    border-bottom: none;
    padding: 0;
    margin: 0;
   }
   .q.active {
    p {
     img {
      transform: rotate(180deg);
     }
    }
   }
   .q {
    margin-bottom: 28px;
    span {
     margin-top: 28px;
     display: block;
    }
    p {
     font-family: Manrope;
     font-size: 18px;
     font-weight: 500;
     line-height: 25px;
     letter-spacing: 0em;
     text-align: left;
     margin: 0;
    }
   }
  }
 }
}
</style>
