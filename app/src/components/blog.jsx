import React from 'react'
import Grid from '@mui/material/Grid';

function Blog() {
  return (
    <div >

      <Grid container>
        <Grid item xs={8} md={2} style={{ marginLeft: "110px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src="https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1710999704812/904e0f5f1afeed426dfa2c9a31f04166.png_w860-h860.webp" width={300} height={300} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>VIVO T3 - verified</span><br></br>
          <p style={{ textAlign: "justify" }}>The Vivo T3 5G is a well-rounded phone under Rs 20,000. Not only does it get one of the fastest chipsets in this price range,
             but it also offers a good-looking design, a bright display, and better battery life compared to its predecessor.</p>
          <br></br>
        </Grid>

        <Grid item xs={8} md={2.5} style={{ marginLeft: "90px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src="https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-sm-s921blbcins-thumb-539572328" width={300} height={300} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>Little Purple House - verified</span><br></br>
          <p style={{ textAlign: "justify" }}>Performance of the Galaxy S9 was excellent. The maximum upload and download speeds and tested processor performance were very fast. You should be able to accomplish most tasks with no delays. 
            Call quality and convenience on the Galaxy S9 were not the best but they were very good.</p>
          <br></br>
        </Grid>

        <Grid item xs={8} md={2} style={{ marginLeft: "20px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a256ezygins/gallery/in-galaxy-a25-5g-sm-a256-sm-a256ezygins-thumb-539207846" width={300} height={300} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>Impressive Performance - verified</span><br></br>
          <p style={{ textAlign: "justify" }}>As someone who values both performance and reliability in a smartphone, I was excited to give the Galaxy A25 5G 128GB (Unlocked) a try.
             After using it extensively for several weeks, I'm happy to say that it exceeded my expectations.The 128GB storage capacity is ample for storing all my apps, photos, and videos, and the option to expand it via microSD card is a welcome bonus</p>
          <br></br>
        </Grid>

        <Grid item xs={8} md={2} style={{ marginLeft: "90px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src="https://i02.appmifile.com/976_operatorx_operatorx_opx/23/02/2024/c4866f7bdd20c6ed7acf6082417dd340.png" width={300} height={300} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>Here we Go Xiomi! - verified</span><br></br>
          <p style={{ textAlign: "justify" }}>Xiaomi phones are known for their good build quality and performance, and they can withstand regular use for at least two years without getting easily damaged. Of course, this depends on how you use and maintain your phone,
             and whether you protect it with a case and a screen protector.</p>
          <br></br>
        </Grid>

      </Grid>
    </div>
  )
}

export default Blog
