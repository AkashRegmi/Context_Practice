import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

function NotificationsPanel() {
  const { notifications, addNotification, clearNotifications } = useContext(NotificationContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "400px" }}>
      <h3>Notifications</h3>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}

      <button
        onClick={() => addNotification(`New notification at ${new Date().toLocaleTimeString()}`)}
        style={{ marginRight: "10px" }}
      >
        Add Notification
      </button>
      <button onClick={clearNotifications}>Clear Notifications</button>
    </div>
  );
}

export default NotificationsPanel;
