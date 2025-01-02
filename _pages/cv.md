---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


<style>
.tooltip {
    position: relative;
    cursor: pointer;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 20vw;
    background-color: rgba(192,192,192,1);
    color: rgba(255,255,255,1);
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 0%;
    margin-left: 10vw;
    opacity: 0;
}
.tooltip.show .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>


<script>
function toggleTooltip(element) {
    element.classList.toggle('show');
}
</script>


<h2>Education</h2>
<div class="tooltip" onclick="toggleTooltip(this)">
<ul>
<li>B.S. in Mathematics and Physics, Tsinghua University, 2022 - Present</li>
<li>B.E. in Energy and Power Engineering, Tsinghua University, 2022 - Present</li>
</ul>
<span class="tooltiptext">Double major</span>
</div>



<h2>ACADEMIC EXPERIENCES</h2>

<ul>
    <li>
        <strong>Operational Quality Modeling of Civil Aircraft Based on Uncertainty Quantification</strong>
        <div style="font-style: italic;">Supervisor: Xiaowei Yue, Department of Industrial Engineering<span style="float: right;">Oct. 2023 - Sept. 2024</span></div>
        <ul>
            <li>Learned basic machine learning concepts and code operations.</li>
            <li>Developed time-series forecasting algorithms for flight data, implementing models such as CNN, LSTM, Transformer family, linear models, and other recent and hybrid approaches.</li>
            <li>Developed anomaly detection algorithms for data cleaning and wind shear detection, focusing on autoencoder-based models.</li>
            <li>Developed uncertainty quantification methods to model epistemic uncertainty of prediction, with a focus on Bayesian Neural Network.</li>
        </ul>
    </li>
    <li>
        <strong>Development of Data-driven Soft Monitoring Technology for Energy-saving and Environmental Protection</strong>
        <div style="font-style: italic;">Supervisor: Yang Zhang, Department of Energy and Power Engineering<span style="float: right;">Jul. 2024 - Present</span></div>
        <ul>
            <li>Developing time-series forecasting algorithms to monitor boiler gas emissions, integrating both data-driven models and physical mechanisms.</li>
            <li>Developing an online platform with web front-end technology to display boiler gas emission data for environmental monitoring.</li>
        </ul>
    </li>
    <li>
        <strong>AI for Complex Network Science</strong>
        <div style="font-style: italic;">Supervisor: Jingtao Ding, Department of Electronic Engineering<span style="float: right;">Nov. 2024 - Present</span></div>
        <ul>
            <li>Reproduced reinforcement learning control approaches like BC and BPPO on datasets like 1D burgers equation.</li>
            <li>Developing finite time optimal control algorithms based on diffusion.</li>
        </ul>
    </li>
</ul>




<h2>Skills</h2>
<ul>
    <li>C++</li>
    <li>Python
        <ul>
            <li>numpy/matplotlib/pandas</li>
            <li>keras/tensorflow</li>
            <li>pytorch</li>
            <li>scikit-learn</li>
        </ul>
    </li>
    <li>MATLAB/Simulink</li>
    <li>Web Front-End Development
        <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>Vue.js</li>
        </ul>
    </li>
    <li>LaTeX</li>
</ul>

<h2>CAMPUS EXPERIENCE</h2>
<ul>
    <li>Member, Student Right Department, Student Union of Weiyang College <span style="float: right; font-style: italic;">Mar. 2023 - Dec. 2023</span>
        <ul>
            <li>Help organize daily activities and events for the department, e.g. student festival.</li>
        </ul>
    </li>
    <li>Member, Academic Department, Association of Science and Technology of Weiyang College <span style="float: right; font-style: italic;">Mar. 2024 - Dec. 2024</span>
        <ul>
            <li>Give lectures of useful academic-related skills, i.e., MATLAB operations in probability and statistics, Simulink operations, and personal webpage development.</li>
        </ul>
    </li>
</ul>
