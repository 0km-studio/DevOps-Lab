# DevOps-Lab
แข่งขันทักษะวิชาชีพ อุตสาหกรรมดิจิตอลและเทคโนโลยีสารสนเทศ กลุ่มวิชาชีพซอฟแวร์และการนประยุกต์ สาขาวิชาเครือข่ายคอมพิวเตอร์และความปลอดภัย ทักษะเทคโนโลยีสารสนเทศด้านโปรแกรมและเครือข่ายด้วยกระบวนการ DevOps ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)

---

## **เครื่องเซิฟเวอร์**

| รายการ         | สเปค/รายละเอียด                                                                                     | หมายเหตุ                               |
| -------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- |
| CPU            | Intel i3 Gen 10 (4 cores / 8 threads)                                                               | รองรับ Docker + Nuxt 3 + DB            |
| RAM            | 16 GB DDR4 3200 MHz                                                                                 | เพียงพอสำหรับ VM/Container หลายตัว     |
| Storage        | M.2 SSD 1 TB                                                                                        | ใช้เก็บ OS, Docker images, DB, project |
| Network        | LAN Gigabit                                                                                         | เชื่อมต่อ VLAN / NAT / Router          |
| OS             | Ubuntu Server 22.04 LTS หรือ Debian 12                                                              | สำหรับ Linux server และ Docker         |
| Virtualization | Docker, Docker Compose, optional VM (VirtualBox/Proxmox)                                            | ใช้แยก environment                     |
| Software       | Docker, Docker Compose, GitLab, GitLab Runner, Jenkins, Node-RED, MQTT Broker, MySQL/Postgres/Mongo | สำหรับ DevOps workflow                 |

---

## **เครื่องคอมทีม Thanapon + Treetodsatep**

| รายการ    | จำนวน | สเปค/รายละเอียด                                                 | หมายเหตุ                                        |
| --------- | ----- | --------------------------------------------------------------- | ----------------------------------------------- |
| Laptop/PC | 2     | CPU i5/i7 Gen 10+, RAM 16 GB+, SSD 512 GB                       | ทำ Frontend/Backend, test local, connect server |
| OS        | 2     | Windows 10/11 หรือ Linux                                        | ตามความถนัด                                     |
| Software  | 2     | VSCode, Node.js, Nuxt 3, Tailwind, Docker Desktop, Postman, Git | สำหรับ dev workflow                             |

---

## **อุปกรณ์เสริมและอุปกรณ์ IoT**

| รายการ                             | จำนวน           | หมายเหตุ                           |
| ---------------------------------- | --------------- | ---------------------------------- |
| Arduino / ESP8266                  | 1-2             | ส่ง sensor data ไป MQTT            |
| Sensor (Temp, Humidity, Light ฯลฯ) | ตาม project     | ต่อเข้ากับ Arduino                 |
| USB Cable / Power Supply           | ตามจำนวนอุปกรณ์ | สำหรับ Arduino/ESP8266             |
| RJ45 Cable                         | 5-10            | เชื่อมต่อ LAN / VLAN / Router      |
| Switch (Gigabit)                   | 1               | ทำ VLAN สำหรับเครื่องทีม + server  |
| Router / NAT                       | 1               | สำหรับ inter-VLAN, internet access |
| Monitor / Keyboard / Mouse         | ตามความสะดวก    | ใช้สำหรับ server หรือ debug        |

---

## **สเปคสำหรับ workflow competition**

1. **Server**: ทำหน้าที่เป็น **Docker host + GitLab + Database + MQTT Broker**
2. **Laptop ทีม Thanapon**: ทำหน้าที่ **setup Docker, CI/CD, Backend API**
3. **Laptop ทีม Treetodsatep**: ทำหน้าที่ **Frontend Dashboard, Nuxt 3 Pages, fetch API/MQTT**
4. **Network**: เชื่อมต่อ switch → router → server/laptops (VLAN/Inter-VLAN)
5. **อุปกรณ์ IoT**: ส่งข้อมูลจริงเข้า MQTT → Node-RED → Nuxt API → Dashboard

**แผนการแข่งขันแบบ 6–8 ชั่วโมงสำหรับทีม Thanapon + Treetodsatep** workflow แบบ offline competition

---

# **แผนการแข่งขัน DevOps-Lab (6–8 ชั่วโมง)**

### **ทีมและบทบาท**

| ชื่อ             | บทบาท                           | หน้าที่หลัก                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Thanapon**     | Backend / DevOps / Server Setup | - Setup Server & Router, Network, VLAN, NAT <br> - ติดตั้ง Docker, GitLab/GitLab Runner, Jenkins <br> - Backend API / Database Integration <br> - CI/CD Pipeline <br> - MQTT Server / Node-RED Integration <br> - Test Server / Production Server |
| **Treetodsatep** | Frontend / Web Application      | - Vue3 + Nuxt + Tailwind Development <br> - เชื่อม Backend API <br> - UI/UX และ Dashboard <br> - Integration Testing กับ MQTT และ Database                                                                                                        |

---

## **ตารางเวลาแข่งขัน 6–8 ชั่วโมง**

| เวลา        | งาน                                        | คนรับผิดชอบ  | รายละเอียด                                                                                 |
| ----------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------ |
| 0:00 – 0:30 | **วางแผน Project Management**              | ทั้งทีม      | จัดลำดับงานใน Jira / Board, assign task                                                    |
| 0:30 – 1:00 | **ตั้งค่า Router + Network**               | Thanapon     | VLAN Server/Dev, Inter-VLAN Routing, DHCP + Snooping, NAT, ทดสอบการเชื่อมต่อเครื่องกรรมการ |
| 1:00 – 1:30 | **ติดตั้ง Virtualization**                 | Thanapon     | VirtualBox, Linux VM/CT (Ubuntu/Debian/CentOS), SSH Remote Management              |
| 1:30 – 2:00 | **ติดตั้ง DevOps Tools**                   | Thanapon     | Docker, Docker Compose, GitLab/GitLab Runner, Jenkins                                      |
| 2:00 – 2:30 | **เขียน Dockerfile / docker-compose.yaml** | Thanapon     | Container Node.js, Database, HTTPD/Nginx, MQTT, GitLab Runner, Monitoring                  |
| 2:30 – 3:00 | **CI/CD Pipeline**                         | Thanapon     | กำหนด pipeline สำหรับ build/test/deploy, ทดสอบ pipeline                                    |
| 3:00 – 3:30 | **Backend Development**                    | Thanapon     | Nuxt API, Database Integration (MySQL/MariaDB/Postgres/Mongo), Arduino → MQTT           |
| 3:30 – 4:00 | **Frontend Development**                   | Treetodsatep | Vue3 + Nuxt + Tailwind, Dashboard, เชื่อม API และ MQTT                                     |
| 4:00 – 4:30 | **Integration Testing**                    | ทั้งทีม      | Backend ↔ Frontend ↔ Database ↔ MQTT ↔ Node-RED, ตรวจสอบ Dashboard                         |
| 4:30 – 5:00 | **Monitoring & Testing Tools**             | Thanapon     | Grafana/Prometheus/cAdvisor, curl/busybox test, Docker Registry UI                         |
| 5:00 – 5:30 | **Final Commit / Push / Branch Merge**     | ทั้งทีม      | GitLab: commit, push, merge, run pipeline ตรวจสอบ CI/CD                                    |
| 5:30 – 6:00 | **เตรียม Presentation (แยกวันนำเสนอ)**     | ทั้งทีม      | Slide, Architecture Diagram, Flow Diagram, ER Diagram, Demo Short Clip                     |

> **หมายเหตุ:** Presentation และ Q&A ทำวันแยกตามที่กรรมการกำหนด (ไม่เกิน 10 นาที + Q&A 3 นาที)

---

## **บทบาทและหน้าที่สำคัญสรุป**

### Thanapon (Backend / DevOps)

* Network Setup: VLAN, Inter-VLAN Routing, DHCP, NAT
* Setup Server: Linux VM/CT, Docker, GitLab Runner, Jenkins
* Backend Development: Node.js API, Database Logging, MQTT Integration
* CI/CD Pipeline: Build/Test/Deploy
* Monitoring & Testing: Grafana, Prometheus, cAdvisor, curl, busybox

### Treetodsatep (Frontend)

* Frontend Development: Vue3 + Nuxt + Tailwind
* Dashboard & UI Design
* Integration with Backend API and MQTT data

### ทั้งทีม

* Project Management: Task Assignment, Jira/Board
* Container Technology: Pull from Registry, manage Docker Compose / Portainer / Podman
* Arduino Programming: ส่งค่าไป MQTT Broker
* Integration Testing
* Documentation & Architecture Flow Diagram / ER Diagram

---

## **Workflow Diagram (Conceptual)**

```
[Arduino / Sensor] → [MQTT Broker] → [Node-RED / Backend API]
                                      ↓
                             [Database Logging]
                                      ↓
                              [Frontend Dashboard]
                                      ↓
                        [CI/CD Pipeline / GitLab Runner]
```

---

## **Checklist เกณฑ์คะแนน (100 คะแนน)**

| หมวด                   | คะแนน | งาน                                                                                          |
| ---------------------- | ----- | -------------------------------------------------------------------------------------------- |
| Network                | 10    | VLAN, Inter-VLAN, DHCP/Snooping, NAT                                                         |
| Setup Server & DevOps  | 20    | Virtualization, Linux VM, Docker, GitLab, Jenkins, Dockerfile/docker-compose, CI/CD Pipeline |
| MQTT / Node-RED        | 10    | MQTT Server, Node-RED, Hardware Integration, Dashboard                                       |
| Software & Application | 50    | Flow Diagram, ER Diagram, UI Design, RESTful API, Backend/Frontend Development               |
| Presentation           | 10    | Demo + Architecture + Q&A                                                                    |