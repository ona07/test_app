<template>
  <div class="page">
    <div class="about">
      <h1 class="title">ABOUT</h1>
      <div class="contents">
        <div class="me" >
          <h2>ME</h2>
          <div class="list">
            <p v-for="(me, index) in me" :key="index">
              {{ me.item }} : {{ me.value }} 
            </p>
            <p>Github : <a :href="github" target="_blank">{{ github }}</a></p>
          </div>
        </div>
        <div class="history">
          <h2>HISTORY</h2>
          <ul >
            <li v-for="(experience, index) in workExperience" :key="index">
            {{ experience.period }} {{ experience.position }} {{ experience.company }}
            </li>
          </ul>
        </div>
        <div class="skills">
          <h2>SKILLS</h2>
          <div class="list">
            <h4 class="skill-subtitle">LANGUAGE/TOOL/etc...</h4>
            <div class="skill-list">
              <span v-for="(skill, index) in skills" :key="index" class="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
        <div class="projects">
          <h2>PROJECTS</h2>
          <div class="project-container">
            <a v-for="(project, index) in projects" :key="index" class="project-box">
              <a class="project-name" :href="project.link" target="_blank">{{ project.team }}({{ project.frame }})</a>
              <p class="project-position">{{ project.position }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
  data() {
    return {
      me: [
        { item: 'Name', value: '小久保　尚' },
        { item: 'Age', value: '19' },
        { item: 'University', value: '公立はこだて未来大学' },
        { item: 'E-mail', value: 'b1022096@fun.ac.jp' },
      ],
      github:'https://github.com/ona07',
      workExperience: [
        { period: '2004.01.29', position: '', company: '誕生' },
        { period: '', position: '', company: '' }
      ],
      skills: [
        'Japanese','FastAPI','Python','HTML','Javascript','CSS','Vue.js','Processing','C','R','Blender',
        'analysis (mathematical)','Practical English Proficiency Test Level 4',
      ],
      projects: [
        { frame: '高度ICT演習', team: 'fun-i-con', position: 'backend' ,link:'https://www.fun.ac.jp/advanced-ict'},
        { frame: 'いさりびwith', team: '商品開発チーム', position: 'subleader&web developer' },
      ],
    };
  },
};
</script>

<style>
.page{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
.about{
  width: 50vw;
  height: 100vh;
  margin-top: 0px;
  color: aliceblue;
}
.title{
  font-weight: lighter;
  margin-top: 50px;
  margin-bottom: 0px;
}
h2{
  margin-top: 120px;
  font-weight: lighter;
}
.list{
  margin-left: 30px;
  font-weight: lighter;
}
.skill-subtitle{
  margin-bottom: 10px;
}
.skill-list{
  display: flex;
  flex-wrap: wrap;
}
.skill{
  width: fit-content;
  border: 1px solid white;
  padding: 4px 10px 4px 10px;
  margin-right: 8px;
}
.project-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.project-box{
  flex-basis: 25%;
  padding: 10px 10px 10px 0px;
}
.project-name {
  font-size: 18px;
  color: white;
  
}
.project-position {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
