# 推进技术

相关的推进技术除了现在常用的曲率推进之外，还有另外一些可以使用的推进技术。

## 简要介绍

### 曲率推进

曲率推进的主要的理论依据是广义相对论。Alcubierre 在二十世纪末提出了相关的理论，但是由于当时技术的限制，并不能对这类引擎进行试验。

Alcubierre 类推进的主要原理是产生一个时空泡泡，然后通过移动这个时空泡泡来移动飞船。其实就是通过操控**空间**来从一个地方移动到另一个地方的推进技术。


![](https://upload.wikimedia.org/wikipedia/commons/c/c4/Alcubierre.png)



如果把**空间**看作是橡皮膜，那么 warp drive 实际上就是在通过压缩前方的空间，拉伸后方的空间来「移动」的。就是说，我们想从 A 点出发到达 B 点，实际上我们只需要把飞船前方的空间压缩一下，全部拿到飞船的后方来，不就可以到达 B 点了么。有点像是，「我不过去，山会过来」。如果我们仅仅操控空间，而不影响时间，那么就太好了，我们可以从 A 以任意**速度**到达 B 地点，但是总会花费一点时间，因为我们把空间这块**橡皮膜**压缩起来或者伸展开去总需要一定的时间吧。

这种推进有种很大的优势，那就是飞船里面的人不会察觉到飞船移动状况的改变，因为局域的来看，我们实际上根本没动。


* 扩展阅读：[The warp drive: hyper-fast travel within general relativity](http://arxiv.org/abs/gr-qc/0009013) By Miguel Alcubierre.


### Krasnikov 通道

Krasnikov 通道是一种通过对时空进行修改从而达到一次修建多次使用的技术。

通过修改时空来缩短两点之间的距离，使得时空形成一条稳定的管道，从而达到在两点之间快速移动的目的。

Krasnikov 仔细分析了管道的修建和因果关系，所以这类通道叫做 Krasnikov 通道。


* 扩展阅读：[The quantum inequalities do not forbid spacetime shortcuts](http://arxiv.org/abs/gr-qc/0207057) By S. Krasnikov.



### Heim 理论

在二十世纪 B. Heim 的几何化的场论为我们提供了描述两种不同于引力、电磁力、弱相互作用、强相互作用四种力的新的相互作用，并且提供了电磁相互作用和引力的更加紧密的联系的描述。这使得我们可以通过电磁力来操控引力。

Heim 的理论中，通过在不同的能量之间相互转换，既可以将飞船移动，不消耗推进剂也可以推进飞船。


* 扩展阅读：[Physical principles of advanced space propulsion based on Heins' field theory](http://www.hpcc-space.com/publications/documents/PrinciplesOfAdvancedSpacePropulsionAIAA-paper-2002-4094.pdf)
*

-----
-----

## 详细知识




### 曲率推进进阶

Warp drive 可以达到很多倍的光速，而且时间膨胀效应很小，所以 warp drive 就是我们理想的载人航行器！

Miguel Alcubierre 提出了一种神秘的度规，这种度规恰好可以帮我们实现曲率推进，该度规就被称为 Alcubierre metric.

Alcubierre 度规是像是一个可以将飞船包裹起来的时空泡泡，泡泡内部还是正常的闵氏时空，然而这个时空泡泡却有一个时空剧烈变动的外壳。

Einstein 的场方程的两端可以分别是物质和时空，现在要做的只是设计一个合理的度规，然后按照上面的方程解出所需要的物质的分布和特性。





#### **推进器的重要参数 —— warp factor**

在 Star Trek 中，速度一直是使用 warp N 来表示的，warp 1 表示一倍光速，其他的按照
$$v=w^3c$$
来计算，其中 $v$ 是闵氏时空中的测量速度，$c$ 是光速，$w$ 便是 warp factor（扭曲因子，wikipedia 上翻译为「曲率层级」，我觉得不够直观）。一开始的时候，开到 warp 5 就已经不得了了呢。

后来的剧集中，Okuda 更改了 warp factor 的定义，新的定义为 warp factor 为 1-9 时
$$v=w^{10/3}c$$
而超过 9 就直接手绘了一条趋向无穷的曲线。到了 1995 年，有人给出了一个解析公式。下图是 [wikipedia 中的新旧 warp factor 的对照表以及其能量需求等等量直接的关系](http://en.wikipedia.org/wiki/File:Warptable.gif)。

![Warp Factor](http://upload.wikimedia.org/wikipedia/en/4/4b/Warptable.gif)




#### **Alcubierre 度规**

Alcubierre 度规可以从 ADM 形式中猜出来，但是这个 Alcubierre 前辈已经写出来了，所以只需要把前辈的那个抄过来，
$$\mathrm ds^2 = -\mathrm dt^2+(\mathrm dx - v_s f(r_s)\mathrm dt)^2 + \mathrm dy^2 + \mathrm dz^2$$
其中，$$v_s=\mathrm dx_s/\mathrm dt$$
$$r_s=((x -x_s)^2 + y^2 + z^2)^{1/2}$$
$$f(r_s)=\frac{\tanh(\sigma(r_s + R))-\tanh(\sigma(r_s - R))}{2\tanh(\sigma R)}$$
并且 $\sigma>0$，$R>0$。

怎么看这个度规呢，其实我们可以把飞船看做一个点，放在 $x_s$并让飞船的轨迹沿着 x 轴，然后 $r_s$ 可以看做是离开飞船的距离。然后我们看一下 $f(r_s)$ 这个函数的渐进行为。这个函数里面的 $\sigma$ 这个参数是用来调节 $\tanh$ 函数的陡峭程度的，同时也可以调节 $f(r_s)$ 这个函数的陡峭程度。下面我们看一个极端情况

\begin{equation}\lim_{\sigma\rightarrow\infty} f(r_s)=\begin{cases} 1 & r_s\in [-R, R]\\\\0 & \text{otherwise.} \end{cases}\end{equation}

也就是说，这是一个帽子函数。$\sigma$ 越大，这个帽子就越陡，而且中心越平坦。
实际上这保证了离飞船比较远的地方依然是闵氏时空。

有了 metric ，你就可以依据这个 metric 来计算所需要的物质了，然后就是如何得到这种物质并且给出特定的分布。在这之前，你需要检验一下这个度规是否真的满足我们的需求，对不对？

首先，检查一下飞船远处的时空状况。此时 $r_s$ 很大，度规退化成
$$\mathrm ds^2 = -\mathrm dt^2+\mathrm dx ^2 + \mathrm dy^2 + \mathrm dz^2$$
恰是闵氏度规。

这样形象的来看，飞船就是被包裹在一个「时空蛋壳」里了。那么这个飞船可以行进多快呢？答案是想多快就多快。

因为飞船的移动完全依赖于 $v_s$ 的大小，我们通过调节这个参数的大小，就可以调节飞船在无穷远的人看来的「移动速度」。而且，Alcubierre 证明，这种移动没有时间上的膨胀效应，也就是说，在无穷远的人看来，如果飞船花了一天从 A 地点到达了 B 地点，那么飞船上的人也是同样这么认为的。


