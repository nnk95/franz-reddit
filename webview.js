const path = require('path');

module.exports = (Franz) => {
    const getNotifications = () => {
      const notificationCount = document.querySelectorAll('.notificationToast').length;
      Franz.setBadge(notificationCount);
    }

    Franz.loop(getNotifications);
  }