<script>
export default {
  mounted() {
    localStorage.removeItem("auth-token")
    localStorage.removeItem("user-mobile")
    this.$router.push({path: '/', replace: true})
  }
}
</script>
