<template>
  <div>
    <MainNavBar v-bind:navcolor="navcolor">
      <slot>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAZCAYAAACSP2gVAAAABmJLR0QA/wD/AP+gvaeTAAAEnElEQVRYhc2ZW2xVRRSGv1XbWuQSk6qtSIOQoKBioia8EHlRvCYYI1W8JypY06Qq6IMP+uIlUZRaK8QQ1CgvmqJRa8VYowkGgwYUFVHQKHgLJmADBiyW9vdh79POmTNnX84h4J+cdNasf/0zs87M6ux9ICMk3SWp3/m8mzXW07lCpVhUiVYZ/WkB/Y5K9WpzcGcAlzr2PxWOudSzfwHWFQxJk4FzMmp9bGbDkiYAV8Z9TQHeBZJagSFgF/C9mQ26BEkGXAQ0AJ+a2UjGOYwKPOV9K7kTJGm2pBFPZ5nHWRzYAeUwMY6ZlSNGkgYkLZfU4Iz7iuPvk1QDUJN3kVXifsAc+wCw5hjPAeBk4AHgQ0m1ks4FbnP8VwFzIF+CLJ1SHpKagZu87hfNbH81ulViLtAOnBbwHYHqdlDehLUDJ3p93VWMf7TQGuh7w8w2g1OkJc0AVnnER81sQ9xOTIikd4BxTlefmT0b+8YD9wTC1nq17HbgPWB+bN8NLPRilgA/x+1D8d/dTswU4GUvpjPWrQMeAi52fOcDW534ATPbElrgJYFiNt/xP+35Dnvxv3v+1x1fe4bC+UlgTk8EeLNLJl8cMyUQs8TxP+L5hpP03CN2SsC/12mnHam9nu3q3ZISC7AiA6dSVFxK3MBTA35/0S78hPlcV++klHn8CLydwqkGFSfIvSg2BvxJCfKxz7PdHbQQaAMmANMpvnACdOW+mMWQ9DAwz+kaH6B1SLo2bk/zfDWS+oAfgPeBfjMrPXaSur2zedDzr/D8Q55/lec/TACS1nq8fYqKeIibWoMkvRXgVIMtkkb/7SfVoDy7J8SvlzTJW0wzcL3HW21mB/n/4ELgpYLhJsg/Yv6C04q0f8SgNOltQL1j/ws8n6J7PHC1pKlQXIP8xYQWnITQjmsEfgKQVE90r3ExDNwraQTYbmav5hwTYE9hjBh1QIvHGYg/ITQRrlszgd1JCdrj2Wk76M9An6t5HdDs+ccBD8btm1P0gzCzNteW1EL0hsDFY2YWvEZIqgNeAO4IzC06YpIagcke4ducc90e6DvPaV+TEPsr0JNzvKMCMxsCyu7cQg06AzjB832Rc6A/KN1F7lb/LCG8O57o8ULZK0YtgJl9LWkj0dMtwCCwsYKBPgJudAZdWXCYWaekfkqPGcCmCsY6JnBr0HLGErTezA4F+GlYx1iCes1sB4CkJqJiuNPMtuXQC9W9ql67lEHZm7aboF5gB3A28ByMPuFPJTp+87zY0JHoBX4jeqJ+xul/HLgz1vRjPjCzyxW9wdsGzEpeC195Gl1mdl9KTBEkzaW45i4I0IK36cWSehy7NeHG+V2ZwW+QtMmxT5c0mKBzWcxbUOHNt8sbvyXAWepxOjLoln5RkhoU3XYLdq2kXWUEVpYIjMXNdNqhx4UCtip6WY6kDRkmHUIlCZokaX+CZvb6K2lZQOBLSaGnfz92oqS/EiZya8ybky0XQeROUMzrKqO3U9KZBV6Wn33WEP3kY0TncjPQY2Z/Z4itI6o/ZwV8Q8BrcXs6sDqDXgj+t30AeNLr+zwQ10nxT1dHgG+AN90rx3/OLWDW4l+D9AAAAABJRU5ErkJggg=="
        />
      </slot>
    </MainNavBar>
    <HomeBGVideo />
    <HomeCenter />
  </div>
</template>

<script>
import MainNavBar from "@/components/mainNavBar/MainNavBar";
import HomeBGVideo from "./childHome/homeBgVideo/HomeVideo";
import HomeCenter from "./childHome/homeCenter/HomeCenter";
export default {
  data() {
    return {
      navcolor: "white"
    };
  },
  components: {
    MainNavBar,
    HomeBGVideo,
    HomeCenter
  }
};
</script>

<style>
</style>