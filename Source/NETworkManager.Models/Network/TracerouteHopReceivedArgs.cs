﻿namespace NETworkManager.Models.Network;

/// <summary>
/// Contains the information of a hop in a <see cref="Traceroute"/>.
/// </summary>
public class TracerouteHopReceivedArgs : System.EventArgs
{
    /// <summary>
    /// Traceroute hop information.
    /// </summary>
    public TracerouteHopInfo Args { get; }

    /// <summary>
    /// Creates a new instance of <see cref="TracerouteHopReceivedArgs"/> with the given <see cref="TracerouteHopInfo"/>.
    /// </summary>
    /// <param name="args">Traceroute hop information.</param>
    public TracerouteHopReceivedArgs(TracerouteHopInfo args)
    {
        Args = args;
    }
}
