<template >
  <section>
    <h1>Porque temos o portal mais amado do Brasil:</h1>
    <div class="wrap mt40 center">

        <div class="card" v-for="card in itens">
            <v-avatar
            style="margin-bottom: 15px;"
                size="50"
                color="primary"
            >
            <v-icon >{{ card.icon }}</v-icon>
            </v-avatar>
            <h1>{{ card.title }}</h1>
            <p>{{ card.subtitle }}</p>
        </div>
    </div>
    
  </section>
  <section>
    <h1>Encontre vagas na sua área</h1>
    <div class="wrap mt40 center">
        <div class="container" v-for="categoria in category">
            <div class="stack">
                <span>{{categoria.title}}</span>
            </div>
           <img src="https://www.gruposeres.com.br/wp-content/uploads/2021/04/post_thumbnail-041575e5961c80abba097dd33fde8ad5.jpeg" alt="">
        </div>
    </div>
  </section>
  <section>
    <h1>Encontre vagas na sua área</h1>
    <div class="wrap mt40 center">
        <div class="container" v-for="categoria in category">
            <div class="stack">
                <span>{{categoria.title}}</span>
            </div>
           <img src="https://www.gruposeres.com.br/wp-content/uploads/2021/04/post_thumbnail-041575e5961c80abba097dd33fde8ad5.jpeg" alt="">
        </div>
    </div>
  </section>
<section>
    <h1>Depoimentos</h1>

    <v-row justify="center">
      <v-col cols="12" md="8" >
     
        <!-- Carousel -->
        <v-carousel class="testimonial-section" hide-delimiters height="200px">
          <v-carousel-item  v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial">
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <div class="testimonial-author">
                <v-avatar size="40">
                  <img :src="testimonial.avatar" alt="Avatar" />
                </v-avatar>
                <span class="author-name">{{ testimonial.author }}</span>
              </div>
            </div>
            
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

</section>
<v-footer color="primary" dark>
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          <p>&copy; 2024 - Sua Empresa. Todos os direitos reservados.</p>
          <v-row justify="center" class="social-icons mt20">
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {

    data() {
        return { testimonials: [
        {
          text: "O atendimento foi excelente e o serviço superou minhas expectativas.",
          author: "Ana Silva",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          text: "Recomendo a todos que buscam qualidade e profissionalismo!",
          author: "João Santos",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          text: "Adorei a experiência! Com certeza voltarei a utilizar os serviços.",
          author: "Maria Oliveira",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
      ],
            itens: [
                { icon: "mdi-heart", title: "8 em cada 10", subtitle: "candidatos gostam ou amam a nossa plataforma" },
                { icon: "mdi-clock", title: "mais de", subtitle: "45 mil vagas exclusivas todos os meses" },
                {icon:"mdi-cash", title: "Cadastro e inscrição em vagas", subtitle:"100% gratuitos"},
            ],
            category: [
                { title: "Texto" },
                { title: "Texto" },
                { title: "Texto" },
                { title: "Texto" },
                { title: "Texto" },
                { title: "Texto" },
                { title: "Texto" },
                { title: "Texto" },

            ]
        }
    }
}
</script>